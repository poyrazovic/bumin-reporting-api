import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import $ from 'jquery';
import Default from '../../layouts/Default/Default';
import Loading from '../../components/Loading/Loading';
import Card from '../../components/Card/Card';
import Input from '../../components/Form-Elements/Input/Input';
import { transactionRequest } from '../../redux/actions';
import { required } from '../../redux/form-validations';

class Transaction extends Component {
  /* eslint-disable react/prop-types */
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
    this.props.transactionRequest(data); // eslint-disable-line react/prop-types
  }

  renderTransaction() {
    const { data } = this.props;
    if (data) {
      return <h3>{data.merchant.name}</h3>;
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
                  <button className="btn btn-primary">SEND</button>
                </div>
              </div>
            </form>
          </Card>
          <div className="row">{this.renderTransaction()}</div>
        </div>
      </Default>
    );
  }
  /* eslint-enable react/prop-types */
}

const mapStateToProps = ({ transactionReducers }) => {
  const { loading, data } = transactionReducers;
  return {
    loading,
    data
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
