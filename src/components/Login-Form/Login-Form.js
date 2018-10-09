import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import $ from 'jquery';
import { required } from '../../redux/form-validations';
import { sendLoginForm, userLogin } from '../../redux/actions';
import Input from '../Form-Elements/Input/Input';
import Checkbox from '../Form-Elements/Checkbox/Checkbox';
import './Login-Form.css';

export class LoginForm extends Component {
  static getEmail() {
    const email = String(localStorage.getItem('email'));
    if (!!email && email !== '' && email !== 'null') {
      return email;
    }
    return '';
  }

  static handleLoad() {
    LoginForm.updateRemaining();
  }

  // eslint-disable-next-line class-methods-use-this
  static updateRemaining() {
    const email = String(localStorage.getItem('email'));
    if (email && email !== '' && email !== 'null') {
      $('input[name="remaining"]').prop('checked', true);
    }
    return '';
  }

  componentDidMount() {
    window.addEventListener('load', LoginForm.handleLoad.bind(this));
    $('#email').focus();
    let email = LoginForm.getEmail();
    email = email || '';
    this.props.change('email', email); // eslint-disable-line react/prop-types
  }

  submit(data) {
    const DATA = data;
    $('.Form-group').removeClass('Form-group--error');
    let errorStatus = false;
    if (required(DATA.email)) {
      $('.Form-group--email').addClass('Form-group--error');
      errorStatus = true;
    }
    if (required(DATA.password)) {
      $('.Form-group--password').addClass('Form-group--error');
      errorStatus = true;
    }
    if (errorStatus) {
      return;
    }
    $('.Login-Form')
      .find('input, textarea, button')
      .blur();
    DATA.remaining = $('input[name="remaining"]:checked').length > 0;
    this.props.sendLoginForm(DATA); // eslint-disable-line react/prop-types
    this.props.userLogin(); // eslint-disable-line react/prop-types
  }

  render() {
    const { handleSubmit } = this.props; // eslint-disable-line react/prop-types
    return (
      // eslint-disable jsx-a11y/label-has-for
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
            <Checkbox name="remaining" id="remaining" size="small" />
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
      // eslint-enable jsx-a11y/label-has-for
    );
  }
}

const mapStateToProps = ({ loginReducers }) => {
  const { loading, auth, message, messageStatus } = loginReducers;
  return {
    loading,
    auth,
    message,
    messageStatus
  };
};

export default connect(
  mapStateToProps,
  {
    sendLoginForm,
    userLogin
  }
)(
  reduxForm({
    form: 'login'
  })(LoginForm)
);
