import React, { useRef } from "react";
import './Login.scss';

export const Login = () => {
  const form = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(form.current);

    const data = {
      username: formData.get('email'),
      password: formData.get('password')
    }
    console.log(data);
  }

  return (
    <div className="login">
      <div className="login__container">
        <img className="login__logo" src="logos/logo_yard_sale.svg" alt="logo" />
        <h1>Log in</h1>
        <form action="/" className="login__form" ref={form}>
          <label htmlFor="email" className="login__label">
            Email address
          </label>
          <input
            type="text"
            name="email"
            placeholder="rocioquigua3@gmail.com"
            className="login__input login__input--email"
          />
          <label htmlFor="password" className="login__label">
            Password
          </label>
          <input
          type="password"
          name="password"
          placeholder="*********"
          className="login__input login__input--password"
          />
          <button
            type="submit"
            className="login__button-primary login__button-primary--button"
            onClick={handleSubmit}>
            Log in
          </ button>
          <a href="/">Forgot my password</a>
        </form>
        <button 
          className="login__button-secundary login__button-secundary--button">
          Sign up
        </button>
      </div>
    </div>
  );
};
