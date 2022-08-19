import React from 'react';
import './RecoveryPassword.scss';

export const RecoveryPassword = () => {
  return (
    <div className="login">
    <div className="login__container">
      <img className="login__logo" src="./logos/logo_yard_sale.svg" alt="logo"  />
      <h1 className="login__title">Email has been sent!</h1>
      <p className="login__subtitle">Please check your inbox for instructions on how to reset the password</p>
      <div className="login__email-image">
        <img src="../assets/images/email.svg" alt="email" />
      </div>
      <input type="submit"
      value="Login" 
      className="login__button-primary 
      login__button-primary--button" />
      <p className="login__resend">
        <span>Don't receive the email?</span>
        <a href="/"> Resend</a>
      </p>
    </div>
  </div>
  );
};