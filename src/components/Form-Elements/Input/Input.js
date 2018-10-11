import React, { Component } from 'react';
import { Field } from 'redux-form';

import './Input.css';
import { updateReduxFormField } from '../../../redux/actions';
import store from '../../../redux/store';

class Input extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      value: ''
    };
    if (props.value !== undefined && props.value !== null) {
      this.state.value = props.value.toString();
    }
  }

  componentWillMount() {
    if (this.props.value !== undefined && this.props.formname && this.props.name) {
      store.dispatch(
        updateReduxFormField(this.props.formname, {
          identifier: this.props.name,
          name: this.props.value
        })
      );
    }
  }

  renderIcon() {
    if (this.props.icon) {
      return <i className={['Input-icon', 'icon', `icon-${this.props.icon}`].join(' ')} />;
    }
    return '';
  }

  render() {
    if (this.state.value !== undefined && this.state.value !== null) {
      return (
        <div
          className={['Input-wrapper', this.props['wrapper-class']].join(' ')}
          style={this.props.wrapperStyle}
        >
          <Field
            {...this.props}
            value={this.state.value}
            onKeyUp={e => {
              if (!this.props.value) {
                this.setState({
                  value: e.target.value
                });
              }
              if (this.props.keyup) {
                this.props.keyup(e);
              }
              if (this.props.onKeyUp) {
                this.props.onKeyUp(e);
              }
            }}
          />
          {this.renderIcon()}
        </div>
      );
    }
    return '';
  }
}

export default Input;
