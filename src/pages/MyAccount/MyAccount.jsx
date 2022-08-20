import React from "react";
import '../MyAccount/MyAccount.scss';

export const MyAccount = () => {
  return (
    <div className="myAccount">
      <div className="myAccount__container">
        <h1 className="myAccount__title">My account</h1>
        <form action="/" className="myAccount__form">
          <div>
            <label for="name" className="myAccount__label">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Rocio Quigua López"
              className="myAccount__input"
            />
            <label for="email" className="myAccount__label">
              Email address
            </label>
            <input
              type="text"
              id="email"
              placeholder="rocioquigua3@gmail.com"
              className="myAccount__input"
            />
            <label for="password" className="myAccount__label">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="*************"
              className="myAccount__input"
            />
          </div>
        </form>
        <input
            type="submit"
            value="Edit"
            className="myAccount__secundary-button"
          />
      </div>
    </div>
  );
};
