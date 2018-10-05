import React, { Component } from 'react';
import { connect } from 'react-redux';
import Default from '../../layouts/Default/Default';

class Transaction extends Component {
  render() {
    return (
      <Default leftPanel pageTitle={'Transaction'}>
        <div className="Transaction">

        </div>
      </Default>
    );
  }
}

const mapStateToProps = ({}) => {
  return {};
};

export default connect(mapStateToProps, {})(
  Transaction
);