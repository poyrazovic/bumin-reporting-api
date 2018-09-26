import {
  CLOSE_DEFAULT_ERROR_MESSAGE,
  OPEN_DEFAULT_ERROR_MESSAGE
} from '../types';

export const openDefaultErrorMessage = (message) => {
  return dispatch => {
    dispatch({
      type: OPEN_DEFAULT_ERROR_MESSAGE,
      payload: message,
    });

  };
};

export const closeDefaultErrorMessage = () => dispatch => {
  dispatch({
    type: CLOSE_DEFAULT_ERROR_MESSAGE,
  });
};

export const updateReduxFormField = (formName, fields) => dispatch => {
  if (fields) {
    if (fields instanceof Array) {
      fields.forEach((item) => {
        dispatch({
          type: '@@redux-form/CHANGE',
          meta: {
            form: formName,
            field: item.identifier,
            touch: false,
            persistentSubmitErrors: false
          },
          payload: item.name,
        });
      });
    } else if (fields instanceof Object) {
      dispatch({
        type: '@@redux-form/CHANGE',
        meta: {
          form: formName,
          field: fields.identifier,
          touch: false,
          persistentSubmitErrors: false
        },
        payload: fields.name,
      });
    }
  }
};
