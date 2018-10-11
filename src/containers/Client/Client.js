import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import moment from 'moment';
import $ from 'jquery';
import Default from '../../layouts/Default/Default';
import Card from '../../components/Card/Card';
import Input from '../../components/Form-Elements/Input/Input';
import { required } from '../../redux/form-validations';
import { clientFilter } from '../../redux/actions';
import Loading from '../../components/Loading/Loading';

class Client extends Component {
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
    this.props.clientFilter(data);
  }

  dataTableCustomerInfoRender() {
    const { data } = this.props;
    return (
      <Card heading="Customer Info">
        <div className="row">
          <div className="col-10">
            <div className="table-responsive">
              <table className="table">
                <tbody>
                  <tr>
                    <th scope="row">ID</th>
                    <td>{data.id}</td>
                  </tr>
                  <tr>
                    <th scope="row">Email</th>
                    <td>{data.email}</td>
                  </tr>
                  <tr>
                    <th scope="row">Number</th>
                    <td>{data.number}</td>
                  </tr>
                  <tr>
                    <th scope="row">Birthday</th>
                    <td>
                      {data.birthday !== null
                        ? moment(data.birthday).format('DD.MM.YYYY')
                        : 'Not specified'}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Gender</th>
                    <td>{data.gender !== null ? data.gender : 'Not specified'}</td>
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
                    <td>{data.expiryMonth}</td>
                  </tr>
                  <tr>
                    <th scope="row">Expiry Year</th>
                    <td>{data.expiryYear}</td>
                  </tr>
                  <tr>
                    <th scope="row">Created at</th>
                    <td>
                      {data.created_at !== null
                        ? moment(data.created_at).format('DD.MM.YYYY')
                        : 'Not specified'}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Updated at</th>
                    <td>
                      {data.updated_at !== null
                        ? moment(data.updated_at).format('DD.MM.YYYY')
                        : 'Not specified'}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Deleted at</th>
                    <td>
                      {data.deleted_at !== null
                        ? moment(data.deleted_at).format('DD.MM.YYYY')
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

  dataTableBillingInfoRender() {
    const { data } = this.props;
    return (
      <Card heading="Billing Info">
        <div className="table-responsive">
          <table className="table">
            <tbody>
              <tr>
                <th scope="row">Name</th>
                <td>
                  {[data.billingTitle, data.billingFirstName, data.billingLastName].join(' ')}
                </td>
              </tr>
              <tr>
                <th scope="row">Phone</th>
                <td>{data.billingPhone}</td>
              </tr>
              <tr>
                <th scope="row">Company</th>
                <td>{data.billingCompany}</td>
              </tr>
              <tr>
                <th scope="row">Address 1</th>
                <td>{data.billingAddress1}</td>
              </tr>
              <tr>
                <th scope="row">Address 2</th>
                <td>{data.billingAddress2 ? data.billingAddress2 : '-'}</td>
              </tr>
              <tr>
                <th scope="row">City</th>
                <td>{data.billingCity}</td>
              </tr>
              <tr>
                <th scope="row">Postcode</th>
                <td>{data.billingPostcode}</td>
              </tr>
              <tr>
                <th scope="row">State</th>
                <td>{data.billingState}</td>
              </tr>
              <tr>
                <th scope="row">Country</th>
                <td>{data.billingCountry}</td>
              </tr>
              <tr>
                <th scope="row">Phone</th>
                <td>{data.billingPhone}</td>
              </tr>
              <tr>
                <th scope="row">Fax</th>
                <td>{data.billingFax !== null ? data.billingFax : '-'}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>
    );
  }

  dataTableShippingInfoRender() {
    const { data } = this.props;
    return (
      <Card heading="Shipping Info">
        <div className="table-responsive">
          <table className="table">
            <tbody>
              <tr>
                <th scope="row">Name</th>
                <td>
                  {[data.shippingTitle, data.shippingFirstName, data.shippingLastName].join(' ')}
                </td>
              </tr>
              <tr>
                <th scope="row">Phone</th>
                <td>{data.shippingPhone}</td>
              </tr>
              <tr>
                <th scope="row">Company</th>
                <td>{data.shippingCompany}</td>
              </tr>
              <tr>
                <th scope="row">Address 1</th>
                <td>{data.shippingAddress1}</td>
              </tr>
              <tr>
                <th scope="row">Address 2</th>
                <td>{data.shippingAddress2 ? data.shippingAddress2 : '-'}</td>
              </tr>
              <tr>
                <th scope="row">City</th>
                <td>{data.shippingCity}</td>
              </tr>
              <tr>
                <th scope="row">Postcode</th>
                <td>{data.shippingPostcode}</td>
              </tr>
              <tr>
                <th scope="row">State</th>
                <td>{data.shippingState}</td>
              </tr>
              <tr>
                <th scope="row">Country</th>
                <td>{data.shippingCountry}</td>
              </tr>
              <tr>
                <th scope="row">Phone</th>
                <td>{data.shippingPhone}</td>
              </tr>
              <tr>
                <th scope="row">Fax</th>
                <td>{data.shippingFax !== null ? data.shippingFax : '-'}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>
    );
  }

  resultRender() {
    const { data, isFilter } = this.props;
    if (isFilter) {
      if (data) {
        return (
          <div className="row">
            <div className="col-20">{this.dataTableCustomerInfoRender()}</div>
            <div className="col-10">{this.dataTableBillingInfoRender()}</div>
            <div className="col-10">{this.dataTableShippingInfoRender()}</div>
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
      <Default leftPanel pageTitle="Client">
        <div className="Client">
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

const mapStateToProps = ({ clientReducers }) => {
  const { loading, data, isFilter } = clientReducers;
  return {
    loading,
    data,
    isFilter
  };
};

export default connect(
  mapStateToProps,
  {
    clientFilter
  }
)(
  reduxForm({
    form: 'client'
  })(Client)
);
