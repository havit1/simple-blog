import React from 'react';
import { Link } from 'react-router-dom';

import PostCard from '../common/postCard';

const PostList = ({ posts }) => {
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
    <h1>Nothing here</h1>
  );
};

export default PostList;
