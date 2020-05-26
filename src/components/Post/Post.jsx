import React from 'react';
import { useParams } from 'react-router-dom';

import { getPost } from '../../services/postsService';

import {
  CustomPaper,
  CustomTypographyBigTitle,
  CustomTypogtaphyMediumText,
  PostWrapper,
} from './Post.styles';
import { CustomMessageTypography, LoadindWrapper } from '../../styles/common';

const Post = () => {
  const [postData, setPostData] = React.useState({});
  const [loading, setLoading] = React.useState(true);
  const params = useParams();
  React.useEffect(() => {
    (async function getData() {
      try {
        const { data } = await getPost(params.postId);
        setPostData(data);
      } catch (error) {
        console.warn(error.message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <PostWrapper>
      {loading ? (
        <LoadindWrapper>
          <CustomMessageTypography>Loading...</CustomMessageTypography>
        </LoadindWrapper>
      ) : (
        <CustomPaper>
          <CustomTypographyBigTitle component='h1'>
            {postData.title}
          </CustomTypographyBigTitle>
          <CustomTypogtaphyMediumText component='p'>
            {postData.body}
          </CustomTypogtaphyMediumText>
        </CustomPaper>
      )}
    </PostWrapper>
  );
};

export default Post;
