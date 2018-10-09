import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import globalReducers from './exports/global-reducers';
import loginReducers from './exports/login-reducers';
import transactionReportReducers from './exports/transaction-report-reducers';
import clientReducers from './exports/client-reducers';

const buminReducers = combineReducers({
  globalReducers,
  loginReducers,
  transactionReportReducers,
  clientReducers,
  form: formReducer
});

export default buminReducers;
