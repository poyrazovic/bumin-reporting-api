import React, {Component} from 'react';
import {Modal} from 'reactstrap';

import './Message.css';
import {connect} from 'react-redux';

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messageStatus: !!props.messageStatus
    };

    this.closeMessage = this.closeMessage.bind(this);
  }

  closeMessage() {
    this.setState({
      messageStatus: false
    });
    setTimeout(() => {
      if (this.props.closeMessage) {
        this.props.closeMessage()
      }
    }, 500);
  }

  renderTitle() {
    if (typeof this.props.title === 'string') {
      return <h4 className="modal-title">{this.props.title}</h4>;
    } else {
      return this.props.title;
    }
  }

  renderFooter() {
    if (this.props.footer) {
      return this.props.footer;
    } else {
      return <button
        type="button"
        className="btn btn btn-outline-secondary Default-button Default-button--transparent"
        onClick={() => {
          this.closeMessage();
        }}
      >
        Kapat
      </button>;
    }
  }

  render() {
    return (
      <div className="Message">
        
        <Modal
          isOpen={this.state.messageStatus}
          toggle={() => {
            this.closeMessage();
          }}
          className={this.state.className}
          size={this.props.size}
        >
          <div className="modal-header">
            {this.renderTitle()}
            <button
              type="button"
              className="close"
              onClick={() => {
                this.closeMessage();
              }}
            >
              <img src="/images/modal-close.svg" alt="close"/>
            </button>
          </div>
          <div className="modal-body">
          {this.props.children}</div>
          <div className="modal-footer">
            {this.renderFooter()}
          </div>
        </Modal>
      </div>
    );
  }
}

// eslint-disable-next-line no-empty-pattern
const mapStateToProps = ({}) => {
  return {};
};

export default connect(mapStateToProps, {})(
  Message
);
