import React from "react";

export const SendEmail = () => {
  return (
    <div className="sendEmail">
      <div className="sendEmail__container">
        <img src="logos/logo_yard_sale.svg" alt="logo" className="sendEmail__logo" />
        <h1 className="sendEmail__title">Email has been sent!</h1>
        <p className="sendEmail__subtitle">
          Please check your inbox for instructions on how to reset the password
        </p>
        <div className="sendEmail__email-image">
          <img src="images/email.svg" alt="email" />
        </div>
        <input
          type="submit"
          value="Login"
          className="sendEmail__primary-button"
        />
        <p className="sendEmail__resend">
          <span>Don't receive the email?</span>
          <a href="/">Resend</a>
        </p>
      </div>
    </div>
  );
};
