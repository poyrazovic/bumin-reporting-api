import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { history } from '../../helpers';
import { userLogout } from '../../redux/actions';
import './Header.css';

class Header extends Component {
  logout() {
    // eslint-disable-next-line react/prop-types
    if (!this.props.loginStatus) {
      return <Redirect to="/login" />;
    }
    return '';
  }

  logoutButton() {
    if (localStorage.getItem('token')) {
      return (
        <button
          className="btn btn-primary"
          onClick={() => {
            localStorage.removeItem('token');
            localStorage.removeItem('username');
            this.props.userLogout(); // eslint-disable-line react/prop-types
            this.logout();
            history.push('/');
          }}
        >
          Logout
        </button>
      );
    }
    return '';
  }

  render() {
    return (
      <header className="Header bg-white">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-10">
              <h1>Bumin Reporting API</h1>
            </div>
            <div className="col-md-10">
              <div className="float-right">
                <span className="mr-4">
                  {localStorage.getItem('username')
                    ? localStorage.getItem('username')
                    : ''}
                </span>
                {this.logoutButton()}
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = ({ loginReducers }) => {
  const { loginStatus, user } = loginReducers;
  return {
    loginStatus,
    user
  };
};

export default connect(
  mapStateToProps,
  {
    userLogout
  }
)(Header);
