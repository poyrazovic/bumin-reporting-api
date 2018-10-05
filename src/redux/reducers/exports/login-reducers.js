import {
  LOGIN_FORM_SEND,
  LOGIN_FORM_SUCCESS,
  LOGIN_FORM_ERROR,
  LOGIN_STATUS,
} from '../../actions/types';

const INITIAL_STATE = {
  loading: false,
  messageStatus: false,
  message: '',
  loginSuccess: false,
  loginStatus: false,
};

const loginReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_FORM_SEND:
      return {
        ...state,
        loading: true,
        messageStatus: false,
      };
    case LOGIN_FORM_SUCCESS:
      return {
        ...state,
        loading: false,
        messageStatus: true,
        message: action.message,
        loginSuccess: true,
      };
    case LOGIN_FORM_ERROR:
      return {
        ...state,
        loading: false,
        messageStatus: true,
        message: action.message,
        loginSuccess: false,
      }
    case LOGIN_STATUS:
      return {
        ...state,
        loginStatus: action.payload
      }
    default:
      return state;
  }
};

export default loginReducers;
