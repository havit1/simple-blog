import React from 'react';
import { Link } from 'react-router-dom';

import { getPosts } from '../../services/postsService';

import PostCard from '../common/PostCard';
import SearchBox from '../SearchBox/SearchBox';

const Posts = ({ match }) => {
  const [posts, setPosts] = React.useState([]);
  const [filteredPosts, setFilteredPosts] = React.useState([]);
  const [page, setPage] = React.useState(match.params.pageNum);
  const [searchQuery, setSearchQuery] = React.useState('');

  React.useEffect(() => {
    // Random data from jsonplaceholder
    (async function getData() {
      const { data } = await getPosts(match.params.sectionId);
      console.log(data);
      setPosts(data);
    })();
  }, []);

  React.useEffect(() => {
    const filtered = posts.filter(
      (post) =>
        post.title.includes(searchQuery) || post.body.includes(searchQuery)
    );
    setFilteredPosts(filtered);
  }, [searchQuery]);

  return (
    <div>
      <SearchBox value={searchQuery} onChange={setSearchQuery} />
      {filteredPosts.length > 0 ? (
        <ul>
          {filteredPosts.map((post) => (
            <li key={post.id}>
              <Link to={`/post/${post.id}`}>
                <PostCard title={post.title} body={post.body} />
              </Link>
            </li>
          ))}
        </ul>
      ) : posts.length > 0 ? (
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
      )}
    </div>
  );
};

export default Posts;
