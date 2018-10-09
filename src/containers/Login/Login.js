import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Authentication from '../../layouts/Authentication/Authentication';
import LoginForm from '../../components/Login-Form/Login-Form'; // eslint-disable-line import/no-named-as-default
import Loading from '../../components/Loading/Loading';
import './Login.css';

class Login extends Component {
  redirectDashboard() {
    return this.props.loginSuccess ? <Redirect to="/" /> : ''; // eslint-disable-line react/prop-types
  }

  render() {
    return (
      <div className="Login">
        <Authentication>
          <Loading
            status={
              this.props.loading /* eslint-disable-line react/prop-types */
            }
          />
          <h1>Login</h1>
          <LoginForm />
          {this.redirectDashboard()}
        </Authentication>
      </div>
    );
  }
}

const mapStateToProps = ({ loginReducers }) => {
  const { loading, loginSuccess } = loginReducers;
  return {
    loading,
    loginSuccess
  };
};

export default connect(
  mapStateToProps,
  {}
)(Login);
