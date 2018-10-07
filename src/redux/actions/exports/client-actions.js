import * as go from '../../../client';
import {
  CLIENT_FILTER,
  CLIENT_FILTER_SUCCESS,
  CLIENT_FILTER_ERROR,
} from '../types';

export const clientFilter = (data) => dispatch => {
  dispatch({
    type: CLIENT_FILTER,
  });
  go.clientAPI
    .post('', data)
    .then(response => {
      clientFilterSuccess(dispatch, data, response);
    })
    .catch(error => {
      clientFilterError(dispatch, data, error);
    });
}

const clientFilterSuccess = (dispatch, data, response) => {
  dispatch({
    type: CLIENT_FILTER_SUCCESS,
    data: response.data.customerInfo,
  });
};

const clientFilterError = (dispatch, error) => {
  dispatch({
    type: CLIENT_FILTER_ERROR,
    error,
  });
};