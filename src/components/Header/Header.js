import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { history } from '../../helpers';
import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logout: false,
    }
    this.logout = this.logout.bind(this);
    console.log('state', this.state.logout);
  }

  logout() {
    this.setState({
      logout: true,
    });
    if(this.state.logout) {
      console.log('state', this.state.logout);
      return <Redirect to={'/login'} />;
    }
  }

  render() {
    return (
      <header className="Header bg-white">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-10">
              <h1>Bumin Reporting API</h1>
            </div>
            <div className="col-md-10 text-right">
              <button className="btn btn-primary" onClick={() => {
                localStorage.removeItem('token');
                this.logout();
                setTimeout(() => {
                  history.push('/login');
                }, 100);
              }}>Cikis Yap</button>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

const mapStateToProps = ({ loginReducers }) => {
  const {
  } = loginReducers;
  return {
  };
};

export default connect(mapStateToProps, {})(
  Header
);