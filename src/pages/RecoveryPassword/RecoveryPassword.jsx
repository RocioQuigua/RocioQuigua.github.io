import React from 'react';
import './RecoveryPassword.scss';

export const RecoveryPassword = () => {
  return (
    <div className="recoveryPassword">
    <div className="recoveryPassword__container">
      <img className="recoveryPassword__logo" src="logos/logo_yard_sale.svg" alt="logo"  />
      <h1 className="recoveryPassword__title">Recovery Password</h1>
      <p className="recoveryPassword__subtitle">Inform the email address used to create your account</p>
      <form action='/'>
      <label htmlFor="email" className="recoveryPassword__label">Email address</label>
      <input type="text" id="email" className="recoveryPassword__input recoveryPassword__input--email" />
      <input type="submit" value="Confirm" className="recoveryPassword__primary-button" />
      </form>
    </div>
  </div>
  );
};