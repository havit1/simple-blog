import React from 'react';
import { useLocation } from 'react-router-dom';

import { getPosts } from '../../services/postsService';
import { paginate } from '../../utils/paginate';

import SearchBox from '../SearchBox/SearchBox';
import PostList from '../PostsList/PostsList';
import Pagination from '../common/pagination';

import { Wrapper } from './Posts.styles';
import { CustomMessageTypography, LoadindWrapper } from '../../styles/common';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Posts = ({ match, history }) => {
  const [loading, setLoading] = React.useState(true);

  const [posts, setPosts] = React.useState([]);
  const [filteredPosts, setFilteredPosts] = React.useState([]);
  const [paginatedPosts, setPaginatedPosts] = React.useState([]);

  const [page, setPage] = React.useState(match.params.pageNum);

  const [searchQuery, setSearchQuery] = React.useState('');
  const query = useQuery();

  React.useEffect(() => {
    // Random data from jsonplaceholder
    (async function getData() {
      try {
        const { data } = await getPosts(match.params.sectionId);
        setPosts(data);
      } catch (error) {
        console.warn(error.message);
      } finally {
        setLoading(false);
      }
      history.location.search.length > 0 &&
        setSearchQuery(decodeURI(query.get('searchQuery')));
    })();
  }, []);

  // SEARCH HANDLING
  React.useEffect(() => {
    const decodetURI = decodeURI(query.get('searchQuery'));

    const filtered = posts.filter(
      (post) =>
        post.title.toLowerCase().includes(decodetURI.toLowerCase()) ||
        post.body.toLowerCase().includes(decodetURI.toLowerCase())
    );
    setFilteredPosts(filtered);
  }, [history.location.search, posts]);

  // Pagination
  React.useEffect(() => {
    const paginated = paginate(
      decodeURI(query.get('searchQuery')) !== 'null' ? filteredPosts : posts,
      page,
      6
    );
    setPaginatedPosts(paginated);
  }, [page, posts, filteredPosts]);

  return (
    <Wrapper>
      {loading ? (
        <LoadindWrapper>
          <CustomMessageTypography>Loading....</CustomMessageTypography>
        </LoadindWrapper>
      ) : (
        <>
          <SearchBox
            value={searchQuery}
            onChange={setSearchQuery}
            history={history}
            onSubmit={setPage}
          />
          <PostList posts={paginatedPosts} />
          <Pagination
            itemsCount={
              decodeURI(query.get('searchQuery')) !== 'null'
                ? filteredPosts.length
                : posts.length
            }
            pageSize={6}
            currentPage={page}
            onPageChange={setPage}
          />
        </>
      )}
    </Wrapper>
  );
};

export default Posts;
