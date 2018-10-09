import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import moment from 'moment';
import $ from 'jquery';
import { required } from '../../redux/form-validations';
import {
  updateStartDate,
  updateEndDate,
  transactionReportFilterData
} from '../../redux/actions';
import Input from '../Form-Elements/Input/Input';
import CDayPickerInput from '../Form-Elements/Day-Picker/Day-Picker';
import Card from '../Card/Card';
import './Report-Form.css';

class ReportForm extends Component {
  submit(data) {
    const datas = {
      fromDate: this.props.startDate, // eslint-disable-line react/prop-types
      toDate: this.props.endDate, // eslint-disable-line react/prop-types
      ...data
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
    this.props.transactionReportFilterData(datas); // eslint-disable-line react/prop-types
  }

  render() {
    const { handleSubmit } = this.props; // eslint-disable-line react/prop-types
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
                  {/* eslint-disable-next-line jsx-a11y/label-has-for */}
                  <label className="Label" htmlFor="fromDate">
                    Start Date
                  </label>
                  <CDayPickerInput
                    className="d-flex align-items-center"
                    name="fromDate"
                    autoComplete="off"
                    id="fromDate"
                    component="input"
                    type="text"
                    onDayChange={e => {
                      // eslint-disable-next-line react/prop-types
                      this.props.updateStartDate(
                        moment(e).format('YYYY-MM-DD')
                      );
                    }}
                    locale="tr"
                  />
                  <span className="Error">Required!</span>
                </div>
              </div>
              <div className="col-10">
                <div className="Form-group Form-group--toDate">
                  {/* eslint-disable-next-line jsx-a11y/label-has-for */}
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
                      this.props.updateEndDate(moment(e).format('YYYY-MM-DD')); // eslint-disable-line react/prop-types
                    }}
                    locale="tr"
                  />
                  <span className="Error">Required!</span>
                </div>
              </div>
              <div className="col-9">
                <div className="Form-group Form-group--merchant pb-0">
                  {/* eslint-disable-next-line jsx-a11y/label-has-for */}
                  <label className="Label" htmlFor="merchant">
                    Merchant
                  </label>
                  <Input
                    className="Input"
                    name="merchant"
                    autoComplete="off"
                    id="merchant"
                    component="input"
                    type="number"
                  />
                </div>
              </div>
              <div className="col-9">
                <div className="Form-group Form-group--acquirer pb-0">
                  {/* eslint-disable-next-line jsx-a11y/label-has-for */}
                  <label className="Label" htmlFor="acquirer">
                    Acquirer
                  </label>
                  <Input
                    className="Input"
                    name="acquirer"
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
  const { startDate, endDate } = transactionReportReducers;
  return {
    startDate,
    endDate
  };
};

export default connect(
  mapStateToProps,
  {
    updateStartDate,
    updateEndDate,
    transactionReportFilterData
  }
)(
  reduxForm({
    form: 'report'
  })(ReportForm)
);
