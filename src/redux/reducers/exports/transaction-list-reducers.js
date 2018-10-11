import {
  TRANSACTION_LIST,
  TRANSACTION_LIST_SUCCESS,
  TRANSACTION_LIST_ERROR,
  TRANSACTION_LIST_START_DATE,
  TRANSACTION_LIST_END_DATE
} from '../../actions/types';

const INITIAL_STATE = {
  fromDate: '',
  endDate: '',
  data: '',
  items: '',
  prevLink: null,
  nextLink: null,
  loading: false
};

const transactionListReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TRANSACTION_LIST:
      return {
        ...state,
        loading: true
      };
    case TRANSACTION_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data,
        items: action.data.data,
        prevLink: action.data.prev_page_url,
        nextLink: action.data.next_page_url
      };
    case TRANSACTION_LIST_ERROR:
      return {
        ...state,
        loading: false
      };
    case TRANSACTION_LIST_START_DATE:
      return {
        ...state,
        startDate: action.payload
      };
    case TRANSACTION_LIST_END_DATE:
      return {
        ...state,
        endDate: action.payload
      };
    default:
      return state;
  }
};

export default transactionListReducers;
