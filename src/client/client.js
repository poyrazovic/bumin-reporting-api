import axios from 'axios';
import * as API from './api';
import store from '../redux/store';
import { openDefaultErrorMessage } from '../redux/actions';

const requestSuccess = (config) => {
  const access_token = localStorage.getItem('access_token');
  if (access_token && access_token !== '') {
    config.headers.Authorization = `Bearer ${access_token}`;
  }
  return config;
};

const requestError = (error) => {
  return Promise.reject(error);
};

const responseSuccess = (config) => {
  return config;
};

const responseError = (error) => {
  const originalRequest = error.config;
  if (error.response.status === 401 && !originalRequest._retry) {
    const refresh_token = localStorage.getItem('refresh_token');
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('token');
    if (refresh_token && refresh_token !== '') {
      const formData = new FormData();
      formData.append('grant_type', 'refresh_token');
      formData.append('client_id', 'web_client');
      formData.append('refresh_token', refresh_token);
      return loginAPI.post('', formData)
        .then(({data}) => {
          originalRequest._retry = true;
          localStorage.setItem('token', JSON.stringify(data));
          localStorage.setItem('access_token', data.access_token);
          localStorage.setItem('refresh_token', data.refresh_token);
          originalRequest.headers['Authorization'] = 'Bearer ' + data.access_token;
          return axios(originalRequest);
        }).catch((error) => {
          store.dispatch(openDefaultErrorMessage('Güvenlik sebebiyle tekrar giriş yapmanız gerekmektedir.'));
          return error;
        });
    } else {
      store.dispatch(openDefaultErrorMessage('Güvenlik sebebiyle tekrar giriş yapmanız gerekmektedir.'));
    }
  } else {
    let message = 'Şuan sunucuya bağlanılamıyor. Lütfen daha sonra tekrar deneyiniz.';
    if (error.response && error.response.data && error.response.data.message) {
      message = error.response.data.message;
    }
    store.dispatch(openDefaultErrorMessage(message));
  }
  return Promise.reject(error);
};

export const loginAPI = axios.create({
  baseURL: API.LOGIN,
  data: JSON.stringify({
    'email': 'demo@bumin.com.tr',
    'password': 'cjaiU8CV',
  }),
  Headers: {
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache',
  }
});

export const clientAPI = axios.create({
  baseURL: API.CLIENT,
});

// Interceptor
clientAPI.interceptors.request.use(requestSuccess, requestError);
clientAPI.interceptors.response.use(responseSuccess, responseError);