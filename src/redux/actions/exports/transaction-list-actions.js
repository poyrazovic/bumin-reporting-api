import * as go from '../../../client';
import {
  TRANSACTION_LIST,
  TRANSACTION_LIST_SUCCESS,
  TRANSACTION_LIST_ERROR,
  TRANSACTION_LIST_START_DATE,
  TRANSACTION_LIST_END_DATE
} from '../types';

export const updateTransactionListStartDate = date => dispatch => {
  dispatch({
    type: TRANSACTION_LIST_START_DATE,
    payload: date
  });
};

export const updateTransactionListEndDate = date => dispatch => {
  dispatch({
    type: TRANSACTION_LIST_END_DATE,
    payload: date
  });
};

const transactionListSuccess = (dispatch, data, response) => {
  dispatch({
    type: TRANSACTION_LIST_SUCCESS,
    data: response.data
  });
};

const transactionListError = (dispatch, error) => {
  dispatch({
    type: TRANSACTION_LIST_ERROR,
    error
  });
};

// eslint-disable-next-line import/prefer-default-export
export const transactionListRequest = (data, page) => dispatch => {
  dispatch({
    type: TRANSACTION_LIST
  });
  go.transactionList
    .post(page !== '' || page !== undefined ? `?page=${page}` : '?page=1', data)
    .then(response => {
      transactionListSuccess(dispatch, data, response);
    })
    .catch(error => {
      transactionListError(dispatch, data, error);
    });
};
