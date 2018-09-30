import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Authentication from '../../layouts/Authentication/Authentication';
import LoginForm from '../../components/Login-Form/Login-Form';
import './Login.css';

class Login extends Component {
  redirectDashboard() {
    if (this.props.loginSuccess) {
      return <Redirect to={'/'} />
    }
    return '';
  }
  
  render() {
    return (
      <div className="Login">
        <Authentication>
          <h1>Login</h1>
          <LoginForm></LoginForm>
          {this.redirectDashboard()}
        </Authentication>
      </div>
    );
  }
}

const mapStateToProps = ({ loginReducers }) => {
  const {
    loading,
    auth,
    message,
    messageStatus,
    loginSuccess,
  } = loginReducers;
  return {
    loading,
    auth,
    message,
    messageStatus,
    loginSuccess,
  };
};

export default connect(mapStateToProps, {
  
})(Login);