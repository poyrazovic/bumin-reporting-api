import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { required } from '../../redux/form-validations';
import { sendLoginForm, userLogin } from '../../redux/actions';
import $ from 'jquery';
import Input from '../Form-Elements/Input/Input';
import Checkbox from '../Form-Elements/Checkbox/Checkbox';
import './Login-Form.css';

export class LoginForm extends Component {
  componentDidMount() {
    window.addEventListener('load', this.handleLoad.bind(this));
    $('#email').focus();
    let email = this.getEmail();
    email = email || '';
    this.props.change('email', email);
  }

  getEmail() {
    const email = String(localStorage.getItem('email'));
    if (!!email && email !== '' && email !== 'null') {
      return email;
    }
    return '';
  }

  handleLoad() {
    this.updateRemaining();
  }

  updateRemaining() {
    const email = String(localStorage.getItem('email'));
    if (email && email !== '' && email !== 'null') {
      $('input[name="remaining"]').prop('checked', true);
    }
    return '';
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="Login-Form">
        <form
          onSubmit={handleSubmit(data => {
            this.submit(data);
          })}
        >
          <div className="Form-group Form-group--email">
            <label className="Label" htmlFor="email">
              E-Mail
            </label>
            <Input
              className="Input"
              name="email"
              ref="email"
              autoComplete="off"
              id="email"
              component="input"
              type="text"
            />
            <span className="Error">Required!</span>
          </div>
          <div className="Form-group Form-group--password">
            <label className="Label" htmlFor="password">
              Password
            </label>
            <Input
              className="Input"
              name="password"
              id="password"
              component="input"
              type="password"
            />
            <span className="Error">Required!</span>
          </div>
          <div className="Form-group Form-group--checkbox mb-3">
            <Checkbox
              name="remaining"
              id="remaining"
              size={'small'}
            />
            <label className="Label Label--checkbox" htmlFor="remaining">
              Beni Hatırla
            </label>
          </div>
          <div className="Form-group">
            <button type="submit" className="btn btn-primary">
              Giriş Yap
            </button>
          </div>
        </form>
      </div>
    );
  }

  submit(data) {
    $('.Form-group').removeClass('Form-group--error');
    let errorStatus = false;
    if (required(data.email)) {
      $('.Form-group--email').addClass('Form-group--error');
      errorStatus = true;
    }
    if (required(data.password)) {
      $('.Form-group--password').addClass('Form-group--error');
      errorStatus = true;
    }
    if (errorStatus) {
      return;
    }
    $('.Login-Form').find('input, textarea, button').blur();
    data.remaining = $('input[name="remaining"]:checked').length > 0;
    this.props.sendLoginForm(data);
    this.props.userLogin();
  }
}

const mapStateToProps = ({ loginReducers }) => {
  const {
    loading,
    auth,
    message,
    messageStatus,
  } = loginReducers;
  return {
    loading,
    auth,
    message,
    messageStatus,
  };
};

export default connect(mapStateToProps, {
  sendLoginForm,
  userLogin,
})(
  reduxForm({
    form: 'login'
  })(LoginForm)
);
