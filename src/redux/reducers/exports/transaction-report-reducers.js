import {
  UPDATE_START_DATE,
  UPDATE_END_DATE,
  TRANSACTION_REPORT_FILTER,
  TRANSACTION_REPORT_FILTER_SUCCESS,
  TRANSACTION_REPORT_FILTER_ERROR,
} from '../../actions/types';

const INITIAL_STATE = {
  startDate: '',
  endDate: '',
  data: '',
  isFilter: false,
};

const transactionReportReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TRANSACTION_REPORT_FILTER:
      return {
        ...state,
      };
    case TRANSACTION_REPORT_FILTER_SUCCESS:
      return {
        ...state,
        isFilter: true,
        data: action.data,
      };
    case TRANSACTION_REPORT_FILTER_ERROR:
      return {
        ...state,
        isFilter: true,
      };
    case UPDATE_START_DATE:
      return {
        ...state,
        startDate: action.payload,
      };
    case UPDATE_END_DATE:
      return {
        ...state,
        endDate: action.payload,
      };
    default:
      return state;
  }
};

export default transactionReportReducers;
