import React, { Component } from 'react';
import { connect } from 'react-redux';
import Default from '../../layouts/Default/Default';

class TransactionList extends Component {
  render() {
    return (
      <Default leftPanel pageTitle={'Transaction List'}>
        <div className="TransactionList">

        </div>
      </Default>
    );
  }
}

const mapStateToProps = ({}) => {
  return {};
};

export default connect(mapStateToProps, {})(
  TransactionList
);