import React from 'react';

export const CreateAccount = () => {
  return (
    <div className="createAccount">
    <div className="createAccount__container">
      <h1 className="createAccount__title">My account</h1>
      <form action="">
        <div>
        <label for="name" 
        className="createAccount__label">Name</label>
        <input type="text" 
        id="name" 
        placeholder="Rocio Quigua López" 
        className="createAccount__input createAccount__input--name" />
        <label for="email" 
        className="createAccount__label">Email address</label>
        <input type="text" 
        id="email" 
        placeholder="rocioquigua3@gmail.com" 
        className="createAccount__input createAccount__input--email" />
        <label for="password" 
        className="createAccount__label">Password</label>
        <input type="password" 
        id="password" 
        placeholder="*************" 
        className="createAccount__input createAccount__input--password" />
        </div>
        <input type="submit" 
        value="Create" 
        className="createAccount__primary-button" /> 
      </form>
    </div>
  </div>
  );
};