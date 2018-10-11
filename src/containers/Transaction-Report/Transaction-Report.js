import React, { Component } from 'react';
import { connect } from 'react-redux';
import Default from '../../layouts/Default/Default';
import DataTable from '../../components/DataTable/DataTable';
import ReportForm from '../../components/Report-Form/Report-Form';

class TransactionReport extends Component {
  render() {
    return (
      <Default leftPanel pageTitle="Transaction Report">
        <div className="TransactionReport">
          <ReportForm />
          <DataTable items={this.props.data /* eslint-disable-line react/prop-types */} />
        </div>
      </Default>
    );
  }
}

const mapStateToProps = ({ transactionReportReducers }) => {
  const { data } = transactionReportReducers;
  return {
    data
  };
};

export default connect(
  mapStateToProps,
  {}
)(TransactionReport);
