import React, { Component } from 'react'
import { connect } from 'react-redux';
import Authentication from '../../layouts/Authentication/Authentication';
import LoginForm from '../../components/Login-Form/Login-Form';

class Login extends Component {
  render() {
    return (
      <Authentication>
        <h1>Login</h1>
        <LoginForm></LoginForm>
      </Authentication>
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