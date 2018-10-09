import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Authentication.css';
import { closeDefaultErrorMessage } from '../../redux/actions';
import Message from '../../components/Message/Message';
import Header from '../../components/Header/Header';

class Authentication extends Component {
  errorMessage() {
    // eslint-disable-next-line react/prop-types
    if (this.props.defaultErrorMessageStatus) {
      let title = 'HATA!';
      let message = this.props.defaultErrorMessage; // eslint-disable-line react/prop-types
      if (typeof this.props.defaultErrorMessage === 'object') {
        title = this.props.defaultErrorMessage.title; // eslint-disable-line react/prop-types
        message = this.props.defaultErrorMessage.message; // eslint-disable-line react/prop-types
      }
      return (
        <Message
          size="md"
          title={<h5 className="modal-title Default-title mb-1">{title}</h5>}
          messageStatus={this.props.defaultErrorMessageStatus}
          closeMessage={() => {
            this.props.closeDefaultErrorMessage(); // eslint-disable-line react/prop-types
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
            {this.props.children /* eslint-disable-line react/prop-types */}
            {this.errorMessage()}
          </div>
        </div>
      </div>
    );
  }
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
