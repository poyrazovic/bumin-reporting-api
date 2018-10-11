import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import $ from 'jquery';
import moment from 'moment';
import Default from '../../layouts/Default/Default';
import Loading from '../../components/Loading/Loading';
import Card from '../../components/Card/Card';
import Input from '../../components/Form-Elements/Input/Input';
import { transactionRequest } from '../../redux/actions';
import { required } from '../../redux/form-validations';
import './Transaction.css';

class Transaction extends Component {
  /* eslint-disable react/prop-types */
  componentDidMount() {
    $('#transactionId').focus();
  }

  submit(data) {
    $('.Form-group').removeClass('Form-group--error');
    let errorStatus = false;
    if (required(data.transactionId)) {
      $('.Form-group--transactionId').addClass('Form-group--error');
      errorStatus = true;
    }
    if (errorStatus) {
      return;
    }
    this.props.transactionRequest(data);
    $('.Transaction')
      .find('input, button')
      .blur();
  }

  statusChecker(el) {
    if (el.status === 'APPROVED') {
      return 'text-success';
    } else if (el.status === 'WAITING') {
      return 'text-info';
    } else if (el.status === 'ERROR') {
      return 'text-danger';
    } else if (el.status === 'DECLINED') {
      return 'text-warning';
    }
    return '';
  }

  dataTableTransactionRender() {
    const { data } = this.props;
    const transaction = data.transaction.merchant;
    return (
      <Card heading="Transaction">
        <div className="table-responsive">
          <table className="table Transaction-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Status</th>
                <th>Merchant ID</th>
                <th>FX ID</th>
                <th>Acquirer ID</th>
                <th>Transaction ID</th>
                <th>Operation</th>
                <th>Channel</th>
                <th>Type</th>
                <th>Created at</th>
                <th>Updated at</th>
                <th>Deleted at</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{transaction.id}</td>
                <td className={this.statusChecker(transaction)}>{transaction.message}</td>
                <td>{transaction.merchantId}</td>
                <td>{transaction.fxTransactionId}</td>
                <td>{transaction.acquirerTransactionId}</td>
                <td>{transaction.transactionId}</td>
                <td>{transaction.operation}</td>
                <td>{transaction.channel}</td>
                <td>{transaction.type}</td>
                <td>
                  {transaction.created_at !== null
                    ? moment(transaction.created_at).format('DD.MM.YYYY')
                    : 'Not specified'}
                </td>
                <td>
                  {transaction.updated_at !== null
                    ? moment(transaction.created_at).format('DD.MM.YYYY')
                    : 'Not specified'}
                </td>
                <td>
                  {transaction.deleted_at !== null
                    ? moment(transaction.created_at).format('DD.MM.YYYY')
                    : 'Not specified'}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>
    );
  }

  dataTableFxRender() {
    const { data } = this.props;
    const fx = data.fx.merchant;
    const { agent } = data.transaction.merchant;
    return (
      <Card heading="FX & Agent">
        <div className="row">
          <div className="col-10">
            <div className="table-responsive">
              <table className="table">
                <tbody>
                  <tr>
                    <th scope="row">Original Amount</th>
                    <td>{fx.originalAmount}</td>
                  </tr>
                  <tr>
                    <th scope="row">Original Currency</th>
                    <td>{fx.originalCurrency}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-10">
            <div className="table-responsive">
              <table className="table">
                <tbody>
                  <tr>
                    <th scope="row">ID</th>
                    <td>{agent.id}</td>
                  </tr>
                  <tr>
                    <th scope="row">Customer IP</th>
                    <td>{agent.customerIp}</td>
                  </tr>
                  <tr>
                    <th scope="row">Customer User Agent</th>
                    <td>{agent.customerUserAgent}</td>
                  </tr>
                  <tr>
                    <th scope="row">Merchant IP</th>
                    <td>{agent.merchantIp}</td>
                  </tr>
                  <tr>
                    <th scope="row">Merchant User Agent</th>
                    <td>{agent.merchantUserAgent}</td>
                  </tr>
                  <tr>
                    <th scope="row">Created at</th>
                    <td>
                      {agent.created_at !== null
                        ? moment(agent.created_at).format('DD.MM.YYYY')
                        : 'Not specified'}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Updated at</th>
                    <td>
                      {agent.updated_at !== null
                        ? moment(agent.updated_at).format('DD.MM.YYYY')
                        : 'Not specified'}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Deleted at</th>
                    <td>
                      {agent.deleted_at !== null
                        ? moment(agent.deleted_at).format('DD.MM.YYYY')
                        : 'Not specified'}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Card>
    );
  }

  dataTableCustomerInfoRender() {
    const { data } = this.props;
    const { customerInfo } = data;
    return (
      <Card heading="Customer Info">
        <div className="row">
          <div className="col-10">
            <div className="table-responsive">
              <table className="table">
                <tbody>
                  <tr>
                    <th scope="row">ID</th>
                    <td>{customerInfo.id}</td>
                  </tr>
                  <tr>
                    <th scope="row">Email</th>
                    <td>{customerInfo.email}</td>
                  </tr>
                  <tr>
                    <th scope="row">Number</th>
                    <td>{customerInfo.number}</td>
                  </tr>
                  <tr>
                    <th scope="row">Birthday</th>
                    <td>
                      {customerInfo.birthday !== null
                        ? moment(customerInfo.birthday).format('DD.MM.YYYY')
                        : 'Not specified'}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Gender</th>
                    <td>{customerInfo.gender !== null ? customerInfo.gender : 'Not specified'}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-10">
            <div className="table-responsive">
              <table className="table">
                <tbody>
                  <tr>
                    <th scope="row">Expiry Month</th>
                    <td>{customerInfo.expiryMonth}</td>
                  </tr>
                  <tr>
                    <th scope="row">Expiry Year</th>
                    <td>{customerInfo.expiryYear}</td>
                  </tr>
                  <tr>
                    <th scope="row">Created at</th>
                    <td>
                      {customerInfo.created_at !== null
                        ? moment(customerInfo.created_at).format('DD.MM.YYYY')
                        : 'Not specified'}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Updated at</th>
                    <td>
                      {customerInfo.updated_at !== null
                        ? moment(customerInfo.updated_at).format('DD.MM.YYYY')
                        : 'Not specified'}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Deleted at</th>
                    <td>
                      {customerInfo.deleted_at !== null
                        ? moment(customerInfo.deleted_at).format('DD.MM.YYYY')
                        : 'Not specified'}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Card>
    );
  }

  resultRender() {
    const { isFilter, data } = this.props;
    if (isFilter) {
      if (data) {
        return (
          <div className="row">
            <div className="col-20">{data ? <h4>{data.merchant.name}</h4> : ''}</div>
            <div className="col-20">{this.dataTableCustomerInfoRender()}</div>
            <div className="col-20">{this.dataTableTransactionRender()}</div>
            <div className="col-20">{this.dataTableFxRender()}</div>
          </div>
        );
      }
      return (
        <Card>
          <p>Results is not found!</p>
        </Card>
      );
    }
    return '';
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <Default leftPanel pageTitle="Transaction">
        <div className="Transaction">
          <Loading status={this.props.loading} />
          <Card>
            <form
              onSubmit={handleSubmit(data => {
                this.submit(data);
              })}
            >
              <div className="row">
                <div className="col-6">
                  <div className="Form-group Form-group--transactionId pb-0">
                    <label className="Label" htmlFor="transactionId">
                      Transaction ID
                    </label>
                    <Input
                      className="Input"
                      name="transactionId"
                      autoComplete="off"
                      id="transactionId"
                      component="input"
                      type="text"
                    />
                    <span className="Error">Required!</span>
                  </div>
                </div>
                <div className="col-2">
                  <button className="btn btn-primary RequestButton">SEND</button>
                </div>
              </div>
            </form>
          </Card>
          {this.resultRender()}
        </div>
      </Default>
    );
  }
  /* eslint-enable react/prop-types */
}

const mapStateToProps = ({ transactionReducers }) => {
  const { loading, data, isFilter } = transactionReducers;
  return {
    loading,
    data,
    isFilter
  };
};

export default connect(
  mapStateToProps,
  {
    transactionRequest
  }
)(
  reduxForm({
    form: 'transaction'
  })(Transaction)
);
