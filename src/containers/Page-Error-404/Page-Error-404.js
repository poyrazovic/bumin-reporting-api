import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Page-Error-404.css';
import Default from '../../layouts/Default/Default';

class PageError404 extends Component {
  render() {
    return <Default>
      <p>Error 404!</p>
    </Default>;
  }
}

const mapStateToProps = () => {
  return {
  };
};

export default connect(mapStateToProps, {

})(
  PageError404
);