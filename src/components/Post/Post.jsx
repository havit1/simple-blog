import React from 'react';
import { useParams } from 'react-router-dom';

import { getPost } from '../../services/postsService';

import {
  CustomPaper,
  CustomTypographyBigTitle,
  CustomTypogtaphyMediumText,
} from './Post.styles';
import { Wrapper, CustomMessageTypography } from '../../styles/common';

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
    <Wrapper>
      {loading ? (
        <CustomMessageTypography>Loading...</CustomMessageTypography>
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
    </Wrapper>
  );
};

export default Post;
