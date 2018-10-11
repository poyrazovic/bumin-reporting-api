import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Authentication.css';
import { closeDefaultErrorMessage } from '../../redux/actions';
import Message from '../../components/Message/Message';
import Header from '../../components/Header/Header';

class Authentication extends Component {
  /* eslint-disable react/prop-types */
  errorMessage() {
    if (this.props.defaultErrorMessageStatus) {
      let title = 'Error';
      let message = this.props.defaultErrorMessage;
      if (typeof this.props.defaultErrorMessage === 'object') {
        title = this.props.defaultErrorMessage.title;
        message = this.props.defaultErrorMessage.message;
      }
      return (
        <Message
          size="md"
          title={<h5 className="modal-title Default-title mb-1">{title}</h5>}
          messageStatus={this.props.defaultErrorMessageStatus}
          closeMessage={() => {
            this.props.closeDefaultErrorMessage();
          }}
        >
          <div className="position-relative">{message}</div>
        </Message>
      );
    }
    return '';
  }

  render() {
    return (
      <div>
        <Header />
        <div className="Authentication">
          <div className="Content bg-white">
            {this.props.children}
            {this.errorMessage()}
          </div>
        </div>
      </div>
    );
  }
  /* eslint-enable react/prop-types */
}

const mapStateToProps = ({ globalReducers }) => {
  const { defaultErrorMessageStatus, defaultErrorMessage } = globalReducers;
  return {
    defaultErrorMessageStatus,
    defaultErrorMessage
  };
};

export default connect(
  mapStateToProps,
  {
    closeDefaultErrorMessage
  }
)(Authentication);
