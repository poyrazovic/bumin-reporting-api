import * as go from '../../../client';
import {
  UPDATE_START_DATE,
  UPDATE_END_DATE,
  TRANSACTION_REPORT_FILTER,
  TRANSACTION_REPORT_FILTER_SUCCESS,
  TRANSACTION_REPORT_FILTER_ERROR
} from '../types';

export const updateTransactionReportStartDate = date => dispatch => {
  dispatch({
    type: UPDATE_START_DATE,
    payload: date
  });
};

export const updateTransactionReportEndDate = date => dispatch => {
  dispatch({
    type: UPDATE_END_DATE,
    payload: date
  });
};

const transactionReportSuccess = (dispatch, data, response) => {
  dispatch({
    type: TRANSACTION_REPORT_FILTER_SUCCESS,
    data: response.data.response
  });
};

const transactionReportError = (dispatch, error) => {
  dispatch({
    type: TRANSACTION_REPORT_FILTER_ERROR,
    error
  });
};

export const transactionReportFilterData = data => dispatch => {
  dispatch({
    type: TRANSACTION_REPORT_FILTER
  });
  go.transactionReport
    .post('', data)
    .then(response => {
      transactionReportSuccess(dispatch, data, response);
    })
    .catch(error => {
      transactionReportError(dispatch, data, error);
    });
};
