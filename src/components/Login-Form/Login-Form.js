import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import $ from 'jquery';
import './Login-Form.css';
import { required } from '../../redux/form-validations';
import { sendLoginForm } from '../../redux/actions';
import Input from '../Form-Elements/Input/Input';

export class LoginForm extends Component {
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
              Kullanıcı Adınız
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
            <span className="Error">Kullanıcı adı giriniz!</span>
          </div>
          <div className="Form-group Form-group--password">
            <label className="Label" htmlFor="password">
              Şifreniz
            </label>
            <Input
              className="Input"
              name="password"
              id="password"
              component="input"
              type="password"
            />
            <span className="Error">Şifre giriniz!</span>
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

  componentDidMount() {
    $('#email').focus();
    let email = this.getEmail();
    email = email || '';
    this.props.change('email', email)
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
    this.props.sendLoginForm(data);
  }

  getEmail() {
    const email = String(localStorage.getItem('email'));
    if (!!email && email !== '' && email !== 'null') {
      return email;
    }
    return '';
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
})(
  reduxForm({
    form: 'login'
  })(LoginForm)
);
