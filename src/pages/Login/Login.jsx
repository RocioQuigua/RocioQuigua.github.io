import React from "react";
import './Login.scss';

export const Login = () => {
  return (
    <div className="login">
      <div className="login__container">
        <img className="login__logo" src="logos/logo_yard_sale.svg" alt="logo" />
        <h1>Log in</h1>
        <form action="/" className="login__form">
          <label for="email" className="login__label">
            Email address
          </label>
          <input
            type="text"
            id="email"
            placeholder="rocioquigua3@gmail.com"
            className="login__input login__input--email"
          />
          <label for="password" className="login__label">
            Password
          </label>
          <input
            type="submit"
            value="Log in"
            className="login__button-primary login__button-primary--button"
          />
          <a href="/">Forgot my password</a>
        </form>
        <button className="login__button-secundary login__button-secundary--button">Sign up</button>
      </div>
    </div>
  );
};
