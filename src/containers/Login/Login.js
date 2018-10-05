import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Authentication from '../../layouts/Authentication/Authentication';
import LoginForm from '../../components/Login-Form/Login-Form';
import Loading from '../../components/Loading/Loading';
import './Login.css';

class Login extends Component {
  redirectDashboard() {
    return this.props.loginSuccess ? <Redirect to={'/'} /> : '';
  }
  
  render() {
    return (
      <div className="Login">
        <Authentication>
          <Loading status={ this.props.loading } />
          <h1>Login</h1>
          <LoginForm></LoginForm>
          { this.redirectDashboard() }
        </Authentication>
      </div>
    );
  }
}

const mapStateToProps = ({ loginReducers }) => {
  const {
    loading,
    loginSuccess,
  } = loginReducers;
  return {
    loading,
    loginSuccess,
  };
};

export default connect(mapStateToProps, {
  
})(Login);