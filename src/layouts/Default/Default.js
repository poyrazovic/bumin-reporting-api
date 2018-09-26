import React, { Component } from 'react';
import { connect } from 'react-redux';

class Default extends Component {
  render() {
    return (
      <div className="Default">
        <div className="Header">
          <p>Header</p>
        </div>
        <div className="Default-content">
          <div className="Default-content-top">
            {this.props.contentTop}
          </div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

const mapStateToProps = () => {
  return {
  };
};

export default connect(mapStateToProps, {

})(
  Default
);