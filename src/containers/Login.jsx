import React from "react";
import '../styles/Login.scss';

export const Login = () => {
  return (
    <div className="login">
      <div className="login__container">
        <img className="login__logo" src="./logos/logo_yard_sale.svg" alt="logo" />
        <h1 className="login__title">Create a new password</h1>
        <p className="login__subtitle">Enter a new password for you account</p>
        <form action="/" className="login__form">
          <label for="password" className="login__label">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="*********"
            className="login__input"
          />
          <label for="new-password" className="login__label">
            Password
          </label>
          <input
            type="password"
            id="new-password"
            placeholder="*********"
            className="login__input"
          />
          <input
            type="submit"
            value="Confirm"
            className="login__button-primary login__button-primary--button"
          />
        </form>
      </div>
    </div>
  );
};
