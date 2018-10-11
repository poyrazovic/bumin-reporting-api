import * as go from '../../../client';
import { TRANSACTION, TRANSACTION_SUCCESS, TRANSACTION_ERROR } from '../types';

const transactionSuccess = (dispatch, data, response) => {
  dispatch({
    type: TRANSACTION_SUCCESS,
    data: response.data
  });
};

const transactionError = (dispatch, error) => {
  dispatch({
    type: TRANSACTION_ERROR,
    error
  });
};

// eslint-disable-next-line import/prefer-default-export
export const transactionRequest = data => dispatch => {
  dispatch({
    type: TRANSACTION
  });
  go.transaction
    .post('', data)
    .then(response => {
      transactionSuccess(dispatch, data, response);
    })
    .catch(error => {
      transactionError(dispatch, data, error);
    });
};
