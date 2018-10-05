import React, { Component } from 'react';
import './Loading.css'

class Loading extends Component {
  render() {
    return (
      <div className={['Loading', (this.props.status ? 'active' : '')].join(' ')}>
          <div className="Loading-inner">
            <p>Yukleniyor...</p>
          </div>
      </div>
    );
  }
}

export default Loading;