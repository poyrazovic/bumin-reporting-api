import React, { Component } from 'react';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

// PAGES
import Login from './containers/Login/Login';
import PageError404 from './containers/Page-Error-404/Page-Error-404';
import Dashboard from './containers/Dashboard/Dashboard';
import TransactionReport from './containers/Transaction-Report/Transaction-Report';
import TransactionList from './containers/Transaction-List/Transaction-List';
import Transaction from './containers/Transaction/Transaction';
import Client from './containers/Client/Client';

if (process.env.NODE_ENV === 'development') {
  require('dotenv'); // eslint-disable-line global-require
}

class AppRouter extends Component {
  static renderRouter() {
    if (localStorage.getItem('token')) {
      return (
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/transaction-report" component={TransactionReport} />
          <Route path="/transaction-list" component={TransactionList} />
          <Route path="/transaction" component={Transaction} />
          <Route path="/client" component={Client} />
          <Route path="/login" render={() => <Redirect to="/dashboard" />} />
          <Route path="/" exact render={() => <Redirect to="/dashboard" />} />
          <Route path="*" component={PageError404} />
        </Switch>
      );
    } else if (!localStorage.getItem('token') || localStorage.getItem('token') === '') {
      return (
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" exact render={() => <Redirect to="/login" />} />
          <Route path="*" exact render={() => <Redirect to="/login" />} />
        </Switch>
      );
    }

    return '';
  }

  render() {
    return AppRouter.renderRouter();
  }
}

const mapStateToProps = ({ globalReducers }) => {
  const { defaultErrorMessageStatus, defaultErrorMessage } = globalReducers;
  return {
    defaultErrorMessageStatus,
    defaultErrorMessage
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    {}
  )(AppRouter)
);
