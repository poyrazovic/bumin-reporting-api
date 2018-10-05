import React, { Component } from 'react';
import { connect } from 'react-redux';
import Default from '../../layouts/Default/Default';

class Client extends Component {
  render() {
    return (
      <Default leftPanel pageTitle={'Client'}>
        <div className="Client">

        </div>
      </Default>
    );
  }
}

const mapStateToProps = ({}) => {
  return {};
};

export default connect(mapStateToProps, {})(
  Client
);