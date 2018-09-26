import React, { Component } from 'react';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

// PAGES
import Login from './containers/Login/Login';
import PageError404 from './containers/Page-Error-404/Page-Error-404';

if (process.env.NODE_ENV === 'development') {
  require('dotenv');
}

class AppRouter extends Component {
  componentWillMount() {
    if (localStorage.getItem('access_token')) {
      this.props.getUserInfo();
    }
  }
  
  renderRouter() {
    if (!!localStorage.getItem('access_token') && this.props.userInfo && this.props.userInfo.userResource) {
      return (
        <Switch>
          <Route path="/login" component={ Login } />
          <Route path="/" exact={true} render={() => <Redirect to={ Login } />}/>
          <Route path="*" component={ PageError404 } />
        </Switch>
      );
    } else if (!localStorage.getItem('access_token') || localStorage.getItem('access_token') === '') {
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
    files,
  } = globalReducers;
  return {
    defaultErrorMessageStatus,
    defaultErrorMessage,
    files,
  };
};

export default withRouter(connect(mapStateToProps, {
  
})(
  AppRouter
));