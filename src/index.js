import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import './index.css';

import registerServiceWorker from './registerServiceWorker';
import { history } from './helpers';
import store from './redux/store';
import AppRouter from './app-router';

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <AppRouter />
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
