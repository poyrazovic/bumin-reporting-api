import * as go from '../../../client';
import {
  LOGIN_FORM_SEND,
  LOGIN_FORM_SUCCESS,
  LOGIN_FORM_ERROR,
} from '../types';

export const sendLoginForm = data => dispatch => {
  dispatch({
    type: LOGIN_FORM_SEND
  });
  go.loginAPI
    .post('', data)
    .then(response => {
      sendFormSuccess(dispatch, data, response);
    })
    .catch(error => {
      sendFormError(dispatch, data, error);
    });
};

const sendFormSuccess = (dispatch, data, response) => {
  if (data.remaining) {
    localStorage.setItem('email', data.email);
  } else {
    localStorage.removeItem('email');
  }
  localStorage.setItem('token', JSON.stringify(response.data));
  localStorage.setItem('access_token', response.data['access_token']);
  localStorage.setItem('refresh_token', response.data['refresh_token']);
  dispatch({
    type: LOGIN_FORM_SUCCESS,
    auth: response.data,
    message: 'Giris Yapildi',
  });
};

const sendFormError = (dispatch, data, error) => {
  data = data === '' || !data ? {} : data;
  const message =
    error.response &&
    error.response.data &&
    error.response.data.message
      ? error.response.data.message
      : 'Bir hata olustu! Lutfen daha sonra tekrar deneyiniz...';
  dispatch({
    type: LOGIN_FORM_ERROR,
    error,
    message,
  });
};

