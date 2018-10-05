import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import moment from 'moment';
import { required } from '../../redux/form-validations';
import $ from 'jquery';
import { updateStartDate, updateEndDate, transactionReportFilterData } from '../../redux/actions';
import Input from '../Form-Elements/Input/Input';
import CDayPickerInput from '../Form-Elements/Day-Picker/Day-Picker';
import Card from '../Card/Card';
import './Report-Form.css';

class ReportForm extends Component {
  submit(data) {
    let datas = {
      fromDate: this.props.startDate,
      toDate: this.props.endDate,
      ...data,
    };
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
    this.props.transactionReportFilterData(datas);
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="ReportForm">
        <Card>
          <form
            onSubmit={handleSubmit(data => {
              this.submit(data);
            })}
          >
            <div className="row">
              <div className="col-10">
                <div className="Form-group Form-group--fromDate">
                  <label className="Label" htmlFor="fromDate">
                    Start Date
                  </label>
                  <CDayPickerInput
                    className="d-flex align-items-center"
                    name="fromDate"
                    ref="fromDate"
                    autoComplete="off"
                    id="fromDate"
                    component="input"
                    type="text"
                    onDayChange={(e) => {
                      this.props.updateStartDate(moment(e).format('YYYY-MM-DD'));
                    }}
                    locale="tr" />
                    <span className="Error">Required!</span>
                </div>
              </div>
              <div className="col-10">
                <div className="Form-group Form-group--toDate">
                  <label className="Label" htmlFor="toDate">
                    End Date
                  </label>
                  <CDayPickerInput
                    className="col"
                    name="toDate"
                    ref="toDate"
                    autoComplete="off"
                    id="toDate"
                    component="input"
                    type="text"
                    onDayChange={(e) => {
                      this.props.updateEndDate(moment(e).format('YYYY-MM-DD'));
                    }}
                    locale="tr" />
                    <span className="Error">Required!</span>
                </div>
              </div>
              <div className="col-9">
                <div className="Form-group Form-group--merchant pb-0">
                  <label className="Label" htmlFor="merchant">
                    Merchant
                  </label>
                  <Input
                    className="Input"
                    name="merchant"
                    ref="merchant"
                    autoComplete="off"
                    id="merchant"
                    component="input"
                    type="number"
                  />
                </div>
              </div>
              <div className="col-9">
                <div className="Form-group Form-group--acquirer pb-0">
                  <label className="Label" htmlFor="acquirer">
                    Acquirer
                  </label>
                  <Input
                    className="Input"
                    name="acquirer"
                    ref="acquirer"
                    autoComplete="off"
                    id="acquirer"
                    component="input"
                    type="number"
                  />
                </div>
              </div>
              <div className="col-2">
                <button className="btn btn-primary">SEND</button>
              </div>
            </div>
          </form>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = ({ transactionReportReducers }) => {
  const {
    startDate,
    endDate,
  } = transactionReportReducers;
  return {
    startDate,
    endDate,
  };
};

export default connect(mapStateToProps, {
  updateStartDate,
  updateEndDate,
  transactionReportFilterData,
})(
  reduxForm({
    form: 'report'
  })(ReportForm)
);

