import React, { Component } from 'react';
import './Loading.css';

class Loading extends Component {
  /* eslint-disable react/prop-types */
  render() {
    return (
      <div className={['Loading', this.props.status ? 'active' : ''].join(' ')}>
        <div className="Loading-inner">
          <h3>{this.props.heading ? this.props.heading : 'Loading'}</h3>
          <p>{this.props.children ? this.props.children : 'Please waiting!'}</p>
        </div>
      </div>
    );
  }
  /* eslint-enable react/prop-types */
}

export default Loading;
