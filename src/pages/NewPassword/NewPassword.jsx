import React from "react";
import './NewPassword.scss';

export const NewPassword = () => {
  return (
    <div className="newPassword">
      <div className="newPassword__container">
        <img className="newPassword__logo" src="logos/logo_yard_sale.svg" alt="logo" />
        <h1 className="newPassword__title">Create a new password</h1>
        <p className="newPassword__subtitle">Enter a new password for you account</p>
        <form action="/" className="newPassword__form">
          <label for="password" className="newPassword__label">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="*********"
            className="newPassword__input"
          />
          <label for="new-password" className="newPassword__label">
            Password
          </label>
          <input
            type="password"
            id="new-password"
            placeholder="*********"
            className="newPassword__input"
          />
          <input
            type="submit"
            value="Confirm"
            className="newPassword__button-primary newPassword__button-primary--button"
          />
        </form>
      </div>
    </div>
  );
};
