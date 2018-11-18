import axios from 'axios';
import config from './config';
import { getAuth } from './auth';

const token = getAuth();

const url = config.API_URL;

export const getURL = endpoint => `${url}${endpoint}`;

const api = axios.create({
  baseURL: url,
});

api.interceptors.request.use((c) => {
  if (token) {
    c.headers["x-access-token"] = `${token}`;
  }
  return c;
});

export default api;
