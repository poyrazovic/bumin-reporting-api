import React, { Component } from 'react';
import './Checkbox.css';

class Checkbox extends Component {
  render() {
    return (
      <div className="Checkbox-wrapper" data-size={this.props.size}>
        <input
          type="checkbox"
          className="Checkbox"
          {...this.props}
          data-size={this.props.size}
        />
        <i className={'Checkbox-ok icon icon-checkmark'} data-size={this.props.size}></i>
        <div className="Checkbox-bg"  data-size={this.props.size} />
      </div>
    );
  }
}

export default Checkbox;
