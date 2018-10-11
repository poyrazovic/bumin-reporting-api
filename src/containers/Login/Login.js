import React, { Component } from 'react';
import { connect } from 'react-redux';
import Authentication from '../../layouts/Authentication/Authentication';
import LoginForm from '../../components/Login-Form/Login-Form';
import Loading from '../../components/Loading/Loading';
import './Login.css';

class Login extends Component {
  /* eslint-disable react/prop-types */
  render() {
    return (
      <div className="Login">
        <Authentication>
          <Loading status={this.props.loading} heading="Signing in" />
          <h1>Login</h1>
          <LoginForm />
        </Authentication>
      </div>
    );
  }
  /* eslint-enable react/prop-types */
}

const mapStateToProps = ({ loginReducers }) => {
  const { loading } = loginReducers;
  return {
    loading
  };
};

export default connect(
  mapStateToProps,
  {}
)(Login);
