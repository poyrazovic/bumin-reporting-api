import React from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import * as API from './api';
import store from '../redux/store';
import { openDefaultErrorMessage } from '../redux/actions';

const requestSuccess = config => {
  const configure = config;
  const accessToken = localStorage.getItem('token');
  if (accessToken && accessToken !== '' && accessToken.length > 0) {
    configure.headers.Authorization = accessToken;
  }
  return configure;
};

const requestError = error => Promise.reject(error);

const responseSuccess = config => config;

const responseError = error => {
  const originalRequest = error.config;
  // eslint-disable-next-line no-underscore-dangle
  if (error.response.status === 401 && !originalRequest._retry) {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    return <Redirect to="/" />;
  }
  let message =
    'Şuan sunucuya bağlanılamıyor. Lütfen daha sonra tekrar deneyiniz.';
  if (error.response && error.response.data && error.response.data.message) {
    message = error.response.data.message;
  }
  store.dispatch(openDefaultErrorMessage(message));

  return Promise.reject(error);
};

const headerContent = {
  'Content-Type': 'application/json',
  'Cache-Control': 'no-cache'
};

const headers = {
  Authorization: localStorage.getItem('token')
};

const allHeaders = {
  ...headers,
  ...headerContent
};

export const loginAPI = axios.create({
  baseURL: API.LOGIN,
  headers: headerContent
});

export const transactionReport = axios.create({
  baseURL: API.TRANSACTIONS_REPORT,
  headers: allHeaders
});

export const transactionList = axios.create({
  baseURL: API.TRANSACTIONS_LIST,
  headers: allHeaders
});

export const transaction = axios.create({
  baseURL: API.INFORMATION_OR_TRANSACTION,
  headers: allHeaders
});

export const clientAPI = axios.create({
  baseURL: API.CLIENT,
  headers: allHeaders
});

// Interceptor
loginAPI.interceptors.request.use(requestSuccess, requestError);
loginAPI.interceptors.response.use(responseSuccess, responseError);

transactionReport.interceptors.request.use(requestSuccess, requestError);
transactionReport.interceptors.response.use(responseSuccess, responseError);

transactionList.interceptors.request.use(requestSuccess, requestError);
transactionList.interceptors.response.use(responseSuccess, responseError);

transaction.interceptors.request.use(requestSuccess, requestError);
transaction.interceptors.response.use(responseSuccess, responseError);

clientAPI.interceptors.request.use(requestSuccess, requestError);
clientAPI.interceptors.response.use(responseSuccess, responseError);
