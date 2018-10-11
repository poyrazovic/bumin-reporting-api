import React, { Component } from 'react';
import { Modal } from 'reactstrap';
import './Message.css';

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messageStatus: !!props.messageStatus // eslint-disable-line react/prop-types
    };

    this.closeMessage = this.closeMessage.bind(this);
  }

  closeMessage() {
    this.setState({
      messageStatus: false
    });
    setTimeout(() => {
      // eslint-disable-next-line react/prop-types
      if (this.props.closeMessage) {
        this.props.closeMessage();
      }
    }, 500);
  }

  renderTitle() {
    // eslint-disable-next-line react/prop-types
    if (typeof this.props.title === 'string') {
      return <h4 className="modal-title">{this.props.title}</h4>;
    }
    return this.props.title;
  }

  renderFooter() {
    // eslint-disable-next-line react/prop-types
    if (this.props.footer) {
      return this.props.footer;
    }
    return (
      <button
        type="button"
        className="btn btn btn-outline-secondary Default-button Default-button--transparent"
        onClick={() => {
          this.closeMessage();
        }}
      >
        Kapat
      </button>
    );
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
          size={this.props.size /* eslint-disable-line react/prop-types */}
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
              <i className="icon icon-cross" />
            </button>
          </div>
          <div className="modal-body">
            {this.props.children /* eslint-disable-line react/prop-types */}
          </div>
          <div className="modal-footer">{this.renderFooter()}</div>
        </Modal>
      </div>
    );
  }
}

export default Message;
