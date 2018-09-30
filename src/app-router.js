import React, { Component } from 'react';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

// PAGES
import Login from './containers/Login/Login';
import PageError404 from './containers/Page-Error-404/Page-Error-404';
import Dashboard from './containers/Dashboard/Dashboard';

if (process.env.NODE_ENV === 'development') {
  require('dotenv');
}

class AppRouter extends Component {
  renderRouter() {
    if (!!localStorage.getItem('token')) {
      return (
        <Switch>
          <Route path="/dashboard" component={ Dashboard } />
          <Route path="/" exact render={() => <Redirect to={'/dashboard'} /> } />
          <Route path="*" component={ PageError404 } />
        </Switch>
      );
    } else if (!localStorage.getItem('token') || localStorage.getItem('token') === '') {
      return <Switch>
        <Route path="*" component={ Login } />
      </Switch>;
    }
  }
  
  render() {
    return (
      this.renderRouter()
    );
  }
}

const mapStateToProps = ({ globalReducers }) => {
  const {
    defaultErrorMessageStatus,
    defaultErrorMessage,
  } = globalReducers;
  return {
    defaultErrorMessageStatus,
    defaultErrorMessage,
  };
};

export default withRouter(connect(mapStateToProps, {
})(
  AppRouter
));