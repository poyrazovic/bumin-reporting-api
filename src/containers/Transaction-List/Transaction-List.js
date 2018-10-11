import React, { Component } from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import moment from 'moment';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import $ from 'jquery';
import { required } from '../../redux/form-validations';
import Default from '../../layouts/Default/Default';
import Card from '../../components/Card/Card';
import CDayPickerInput from '../../components/Form-Elements/Day-Picker/Day-Picker';
import Loading from '../../components/Loading/Loading';
import Accordion from '../../components/Accordion/Accordion';
import {
  transactionListRequest,
  updateTransactionListStartDate,
  updateTransactionListEndDate
} from '../../redux/actions';

class TransactionList extends Component {
  /* eslint-disable react/prop-types, no-script-url, no-unused-expressions */
  submit(pageUrl) {
    const datas = {
      fromDate: this.props.startDate,
      toDate: this.props.endDate,
      page: pageUrl !== undefined ? pageUrl : 1
    };
    $('.Form-group').removeClass('Form-group--error');
    let errorStatus = false;
    if (required(datas.fromDate)) {
      $('.Form-group--fromDate').addClass('Form-group--error');
      errorStatus = true;
    }
    if (required(datas.toDate)) {
      $('.Form-group--toDate').addClass('Form-group--error');
      errorStatus = true;
    }
    if (errorStatus) {
      return;
    }
    this.props.transactionListRequest(datas, datas.page);
  }

  pagination() {
    if (this.props.items && this.props.items.length > 0) {
      let prevStatus = false;
      let nextStatus = false;
      this.props.prevLink === null ? (prevStatus = true) : (prevStatus = false);
      this.props.nextLink === null ? (nextStatus = true) : (nextStatus = false);
      return (
        <Pagination aria-label="Page navigation example">
          <PaginationItem disabled={prevStatus}>
            <PaginationLink
              previous
              href="javascript:void(0)"
              onClick={() => {
                this.submit(this.props.data.current_page - 1);
              }}
            />
          </PaginationItem>
          <PaginationItem disabled={nextStatus}>
            <PaginationLink
              next
              href="javascript:void(0)"
              onClick={() => {
                this.submit(this.props.data.current_page + 1);
              }}
            />
          </PaginationItem>
        </Pagination>
      );
    }
    return '';
  }

  accordionRender(items) {
    if (items && !this.props.loading) {
      return <Accordion items={items} />;
    }
    return '';
  }

  render() {
    const { handleSubmit, items } = this.props;
    return (
      <Default leftPanel pageTitle="Transaction List">
        <div className="TransactionList">
          <Loading status={this.props.loading} />
          <Card>
            <form
              onSubmit={handleSubmit(() => {
                this.submit();
              })}
            >
              <div className="row">
                <div className="col-6">
                  <div className="Form-group Form-group--fromDate pb-0">
                    <label className="Label" htmlFor="fromDate">
                      Start Date
                    </label>
                    <CDayPickerInput
                      className="col"
                      name="fromDate"
                      autoComplete="off"
                      id="fromDate"
                      component="input"
                      type="text"
                      onDayChange={e => {
                        this.props.updateTransactionListStartDate(moment(e).format('YYYY-MM-DD'));
                      }}
                      locale="tr"
                    />
                    <span className="Error">Required!</span>
                  </div>
                </div>
                <div className="col-6">
                  <div className="Form-group Form-group--toDate pb-0">
                    <label className="Label" htmlFor="toDate">
                      End Date
                    </label>
                    <CDayPickerInput
                      className="col"
                      name="toDate"
                      autoComplete="off"
                      id="toDate"
                      component="input"
                      type="text"
                      onDayChange={e => {
                        this.props.updateTransactionListEndDate(moment(e).format('YYYY-MM-DD'));
                      }}
                      locale="tr"
                    />
                    <span className="Error">Required!</span>
                  </div>
                </div>
                <div className="col-2">
                  <button className="btn btn-primary">SEND</button>
                </div>
              </div>
            </form>
          </Card>
          {this.accordionRender(items)}
          {this.pagination()}
        </div>
      </Default>
    );
  }
  /* eslint-enable react/prop-types, no-script-url, no-unused-expressions */
}

const mapStateToProps = ({ transactionListReducers }) => {
  const { data, startDate, endDate, prevLink, nextLink, loading, items } = transactionListReducers;
  return {
    data,
    startDate,
    endDate,
    prevLink,
    nextLink,
    loading,
    items
  };
};

export default connect(
  mapStateToProps,
  {
    transactionListRequest,
    updateTransactionListStartDate,
    updateTransactionListEndDate
  }
)(
  reduxForm({
    form: 'transactionList'
  })(TransactionList)
);
