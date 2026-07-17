import axios from 'axios';

// A pre-configured Axios instance — set the base URL once here,
// so every request elsewhere just uses relative paths like '/users'
const apiClient = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 10000, // cancel the request if it takes longer than 10 seconds
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;