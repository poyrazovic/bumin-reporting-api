import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header/Header';
import './Default.css';

class Default extends Component {
  leftPanelViewer() {
    if(this.props.leftPanel) {
      return (
        <div className="Default-leftPanel col-md-4 bg-white">
          <nav>
            <a href="">Dashboard</a>
            <a href="">Transactions Report</a>
            <a href="">Transactions List</a>
            <a href="">Information or Transactions</a>
            <a href="">Client</a>
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