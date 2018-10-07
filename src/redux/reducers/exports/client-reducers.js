import {
  CLIENT_FILTER,
  CLIENT_FILTER_SUCCESS,
  CLIENT_FILTER_ERROR,
} from '../../actions/types';

const INITIAL_STATE = {
  loading: false,
  data: '',
  error: '',
};

const clientReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CLIENT_FILTER:
      return {
        ...state,
        loading: true,
      };
    case CLIENT_FILTER_SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: false,
      }
    case CLIENT_FILTER_ERROR:
      return {
        ...state,
        loading: false,
      }
    default:
      return state;
  }
};

export default clientReducers;
