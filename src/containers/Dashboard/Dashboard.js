import React, { Component } from 'react';
import { connect } from 'react-redux';
import Default from '../../layouts/Default/Default';

class Dashboard extends Component {
  render() {
    return (
      <Default leftPanel pageTitle={'Dashboard'}>
        <div className="Dashboard">

        </div>
      </Default>
    );
  }
}

const mapStateToProps = ({}) => {
  return {};
};

export default connect(mapStateToProps, {})(
  Dashboard
);