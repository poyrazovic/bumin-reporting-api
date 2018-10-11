import * as go from '../../../client';
import { LOGIN_FORM_SEND, LOGIN_FORM_SUCCESS, LOGIN_FORM_ERROR, LOGIN_STATUS } from '../types';

const sendFormSuccess = (dispatch, data, response) => {
  if (data.remaining) {
    localStorage.setItem('email', data.email);
  } else {
    localStorage.removeItem('email');
  }
  localStorage.setItem('token', response.data.token);
  localStorage.setItem('username', data.email);
  dispatch({
    type: LOGIN_FORM_SUCCESS,
    message: 'Giris Yapildi'
  });
};

const sendFormError = (dispatch, data, error) => {
  const message =
    error.response && error.response.data && error.response.data.message
      ? error.response.data.message
      : 'Bir hata olustu! Lutfen daha sonra tekrar deneyiniz...';
  dispatch({
    type: LOGIN_FORM_ERROR,
    error,
    message
  });
};

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

export const userLogin = () => dispatch => {
  dispatch({
    type: LOGIN_STATUS,
    payload: true,
    loginStatus: true
  });
};

export const userLogout = () => dispatch => {
  dispatch({
    type: LOGIN_STATUS,
    payload: false,
    loginStatus: false
  });
};
