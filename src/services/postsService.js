import axios from 'axios';
import { apiUrl } from '../config.json';

// Get random 20 posts
const getPosts = (id) => {
  const response = axios.get(apiUrl + `?userId=${id}&userId=${10 - id}`);
  return response;
};

// Get post by it's id
const getPost = (postId) => {
  const response = axios.get(`${apiUrl}/${postId}`);
  return response;
};

export { getPosts, getPost };
