import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import globalReducers from './exports/global-reducers';
import loginReducers from './exports/login-reducers';

const buminReducers = combineReducers({
  globalReducers,
  loginReducers,
  form: formReducer,
});

export default buminReducers;