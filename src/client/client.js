import axios from 'axios';
import * as API from './api';

const requestSuccess = (config) => {
  const access_token = localStorage.getItem('token');
  if (access_token && access_token !== '' && access_token.length > 0) {
    config.headers.Authorization = access_token.token;
  }
  console.log('config', config);
  return config;
};

const requestError = (error) => {
  return Promise.reject(error);
};

export const loginAPI = axios.create({
  baseURL: API.LOGIN,
  headers: {
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache',
  }
});

export const clientAPI = axios.create({
  baseURL: API.CLIENT,
});

// Interceptor
clientAPI.interceptors.request.use(requestSuccess, requestError);