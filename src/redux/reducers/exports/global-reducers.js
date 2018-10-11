import { OPEN_DEFAULT_ERROR_MESSAGE, CLOSE_DEFAULT_ERROR_MESSAGE } from '../../actions/types';

const INITIAL_STATE = {
  defaultErrorMessageStatus: false,
  defaultErrorMessage: ''
};

const globalReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case OPEN_DEFAULT_ERROR_MESSAGE:
      return {
        ...state,
        defaultErrorMessage: action.payload,
        defaultErrorMessageStatus: true
      };
    case CLOSE_DEFAULT_ERROR_MESSAGE:
      return {
        ...state,
        defaultErrorMessageStatus: false
      };
    default:
      return state;
  }
};

export default globalReducers;
