import {
  LOGIN_FORM_SEND,
  LOGIN_FORM_SUCCESS,
  LOGIN_FORM_ERROR,
  LOGIN_STATUS
} from '../../actions/types';

const INITIAL_STATE = {
  loading: false,
  messageStatus: false,
  message: '',
  loginStatus: false
};

const loginReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_FORM_SEND:
      return {
        ...state,
        loading: true,
        messageStatus: false,
        loginStatus: false
      };
    case LOGIN_FORM_SUCCESS:
      return {
        ...state,
        loading: false,
        messageStatus: true,
        message: action.message,
        loginStatus: true
      };
    case LOGIN_FORM_ERROR:
      return {
        ...state,
        loading: false,
        messageStatus: true,
        message: action.message,
        loginStatus: false
      };
    case LOGIN_STATUS:
      return {
        ...state,
        loginStatus: action.loginStatus
      };
    default:
      return state;
  }
};

export default loginReducers;
