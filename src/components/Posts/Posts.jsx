import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { getPosts } from '../../services/postsService';

import PostCard from '../common/PostCard';
import SearchBox from '../SearchBox/SearchBox';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Posts = ({ match, history }) => {
  const [posts, setPosts] = React.useState([]);
  const [filteredPosts, setFilteredPosts] = React.useState([]);
  const [page, setPage] = React.useState(match.params.pageNum);
  const [searchQuery, setSearchQuery] = React.useState('');
  const query = useQuery();

  React.useEffect(() => {
    // Random data from jsonplaceholder
    (async function getData() {
      const { data } = await getPosts(match.params.sectionId);
      setPosts(data);
    })();
    setSearchQuery(decodeURI(query.get('searchQuery')));
  }, []);

  // SEARCH HANDLING
  React.useEffect(() => {
    const decodetURI = decodeURI(query.get('searchQuery'));

    const filtered = posts.filter(
      (post) =>
        post.title.includes(decodetURI) || post.body.includes(decodetURI)
    );
    setFilteredPosts(filtered);
  }, [history.location.search, posts]);

  const layoutToRender = () => {
    if (decodeURI(query.get('searchQuery')) !== 'null') {
      return filteredPosts.length > 0 ? (
        <ul>
          {filteredPosts.map((post) => (
            <li key={post.id}>
              <Link to={`/post/${post.id}`}>
                <PostCard title={post.title} body={post.body} />
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <h1>Nothing</h1>
      );
    } else {
      return posts.length > 0 ? (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <Link to={`/post/${post.id}`}>
                <PostCard title={post.title} body={post.body} />
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <h1>Loading</h1>
      );
    }
  };

  return (
    <div>
      <SearchBox
        value={searchQuery}
        onChange={setSearchQuery}
        history={history}
      />
      {layoutToRender()}
    </div>
  );
};

export default Posts;
