import React, { Component } from 'react';
import Default from '../../layouts/Default/Default';

class TransactionList extends Component {
  render() {
    return (
      <Default leftPanel pageTitle="Transaction List">
        <div className="TransactionList" />
      </Default>
    );
  }
}

export default TransactionList;
