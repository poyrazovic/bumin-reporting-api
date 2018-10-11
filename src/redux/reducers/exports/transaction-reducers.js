import { TRANSACTION, TRANSACTION_SUCCESS, TRANSACTION_ERROR } from '../../actions/types';

const INITIAL_STATE = {
  data: '',
  loading: false,
  isFilter: false
};

const transactionReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TRANSACTION:
      return {
        ...state,
        loading: true
      };
    case TRANSACTION_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data,
        isFilter: true
      };
    case TRANSACTION_ERROR:
      return {
        ...state,
        loading: false,
        isFilter: true
      };
    default:
      return state;
  }
};

export default transactionReducers;
