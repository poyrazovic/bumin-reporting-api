import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Header from '../../components/Header/Header';
import './Default.css';

class Default extends Component {
  leftPanelViewer() {
    if(this.props.leftPanel) {
      return (
        <div className="Default-leftPanel col-md-4 bg-white">
          <nav>
            <NavLink to="/dashboard" activeClassName="active">Dashboard</NavLink>
            <NavLink to="/transaction-report" activeClassName="active">Transaction Report</NavLink>
            <NavLink to="/transaction-list" activeClassName="active">Transaction List</NavLink>
            <NavLink to="/transaction" activeClassName="active">Transaction</NavLink>
            <NavLink to="/client" activeClassName="active">Client</NavLink>
          </nav>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="Default">
        <Header />
        <div className={['container-fluid', (!this.props.leftPanel ? 'text-center' : '')].join(' ')}>
          <div className="row d-flex align-items-stretch">
            {this.leftPanelViewer()}
            <div className={['Default-content w-100', (this.props.leftPanel ? 'col-md-16' : 'col-md-20')].join(' ')}>
              <h2>{ this.props.pageTitle }</h2>
              { this.props.children }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = () => {
  return {
  };
};

export default connect(mapStateToProps, {

})(
  Default
);