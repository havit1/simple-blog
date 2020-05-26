import React from 'react';
import PostCard from '../common/postCard';
import { CustomList, CustomListItem, CustomLink } from './PostsList.styles';

import { CustomMessageTypography, LoadindWrapper } from '../../styles/common';

const PostList = ({ posts }) => {
  return posts.length > 0 ? (
    <CustomList>
      {posts.map((post) => (
        <CustomListItem key={post.id}>
          <CustomLink to={`/post/${post.id}`}>
            <PostCard title={post.title} body={post.body} />
          </CustomLink>
        </CustomListItem>
      ))}
    </CustomList>
  ) : (
    <LoadindWrapper>
      <CustomMessageTypography component='h1'>
        Nothing was found :(
      </CustomMessageTypography>
    </LoadindWrapper>
  );
};

export default PostList;
