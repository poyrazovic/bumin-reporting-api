import React, { Component } from 'react';
import { Collapse, CardBody, Card, CardHeader } from 'reactstrap';
import { connect } from 'react-redux';
import moment from 'moment';
import CardBlock from '../Card/Card';
import './Accordion.css';

class Accordion extends Component {
  /* eslint-disable react/prop-types, class-methods-use-this, react/no-array-index-key */
  constructor(props) {
    super(props);
    this.state = {
      collapse: null
    };
  }

  statusChecker(el) {
    if (el.transaction.merchant.status === 'APPROVED') {
      return 'text-success';
    } else if (el.transaction.merchant.status === 'WAITING') {
      return 'text-info';
    } else if (el.transaction.merchant.status === 'ERROR') {
      return 'text-danger';
    } else if (el.transaction.merchant.status === 'DECLINED') {
      return 'text-warning';
    }
    return '';
  }

  render() {
    const { collapse } = this.state;
    const { items, isFilter } = this.props;
    if (isFilter) {
      if (items && items.length > 0) {
        return items.map((el, index) => {
          if (el && el.customerInfo) {
            return (
              <Card className="Accordion mb-3" key={index}>
                <CardHeader
                  className="bg-white"
                  data-event={index}
                  onClick={() => {
                    this.setState({ collapse: this.state.collapse === index ? null : index });
                  }}
                >
                  <div className="p-4 col-20">
                    <div className="heading-text-wrapper w-100">
                      <div className="row d-flex align-items-center">
                        <div className="heading-text-wrapper-left col-10">
                          <h3 className="text-primary">
                            {el.customerInfo.billingFirstName
                              ? el.customerInfo.billingFirstName
                              : ''}{' '}
                            {el.customerInfo.billingLastName ? el.customerInfo.billingLastName : ''}
                          </h3>
                          <p className="mb-0">
                            <span>{el.customerInfo.email ? el.customerInfo.email : ''}</span>
                            {' - '}
                            {el.customerInfo.number !== undefined
                              ? el.customerInfo.number
                              : 'Not specified'}
                          </p>
                        </div>
                        <div className="heading-text-wrapper-right col-10">
                          <p>
                            Status:
                            <span
                              className={['font-weight-bold', this.statusChecker(el)].join(' ')}
                            >
                              {el.transaction.merchant.message}
                            </span>
                          </p>
                          <p>
                            Transaction ID: <span>{el.transaction.merchant.transactionId}</span>
                          </p>
                          <p>
                            Created at:
                            <span>
                              {moment(el.transaction.merchant.created_at).format('DD.MM.YYYY')}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <Collapse isOpen={collapse === index}>
                  <CardBody className="bg-white">
                    <div className="p-4">
                      <div className="row">
                        <div className="col-lg-6">
                          <h4 className="text-primary">FX</h4>
                          <table className="table mb-3">
                            <tbody>
                              <tr>
                                <th scope="row">Original Amount</th>
                                <td>{el.fx.merchant.originalAmount}</td>
                              </tr>
                              <tr>
                                <th scope="row">Original Currency</th>
                                <td>{el.fx.merchant.originalCurrency}</td>
                              </tr>
                              <tr>
                                <th scope="row">Converted Amount</th>
                                <td>{el.fx.merchant.convertedAmount}</td>
                              </tr>
                              <tr>
                                <th scope="row">Converted Currency</th>
                                <td>{el.fx.merchant.convertedCurrency}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className="col-lg-6">
                          <h4 className="text-primary">Acquirer</h4>
                          <table className="table mb-3">
                            <tbody>
                              <tr>
                                <th scope="row">ID</th>
                                <td>{el.acquirer.id}</td>
                              </tr>
                              <tr>
                                <th scope="row">Name</th>
                                <td>{el.acquirer.name}</td>
                              </tr>
                              <tr>
                                <th scope="row">Code</th>
                                <td>{el.acquirer.code}</td>
                              </tr>
                              <tr>
                                <th scope="row">Type</th>
                                <td>{el.acquirer.type}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className="col-lg-6">
                          <h4 className="text-primary">Merchant</h4>
                          <table className="table mb-3">
                            <tbody>
                              <tr>
                                <th scope="row">ID</th>
                                <td>{el.merchant.id}</td>
                              </tr>
                              <tr>
                                <th scope="row">Name</th>
                                <td>{el.merchant.name}</td>
                              </tr>
                              <tr>
                                <th scope="row">Partial Refund</th>
                                <td>{el.merchant.allowPartialRefund}</td>
                              </tr>
                              <tr>
                                <th scope="row">Partial Capture</th>
                                <td>{el.merchant.allowPartialCapture}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Collapse>
              </Card>
            );
          }
          return '';
        });
      }
      return (
        <CardBlock>
          <p>Result is not found!</p>
        </CardBlock>
      );
    }
    return '';
  }
  /* eslint-enable react/prop-types, class-methods-use-this, react/no-array-index-key */
}

const mapStateToProps = ({ transactionListReducers }) => {
  const { loading, isFilter } = transactionListReducers;
  return {
    loading,
    isFilter
  };
};

export default connect(
  mapStateToProps,
  {}
)(Accordion);
