import axios from 'axios';
import { apiUrl } from '../config.json';

const getPosts = (id) => {
  console.log(id);
  try {
    const response = axios.get(apiUrl + `?userId=${id}&userId=${10 - id}`);
    return response;
  } catch (error) {
    return error.message;
  }
};

export { getPosts };
