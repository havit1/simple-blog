import React from 'react';
import { useParams } from 'react-router-dom';

import { getPost } from '../../services/postsService';

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

  return <div>Hello from Post</div>;
};

export default Post;
