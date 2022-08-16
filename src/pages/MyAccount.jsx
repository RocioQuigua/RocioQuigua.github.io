import React from 'react';

export const MyAccount = () => {
  return (
<div class="login">
    <div class="form-container">
      <img src="./logos/logo_yard_sale.svg" alt="logo" class="logo" />
      <h1 class="title">My account</h1>
      <form action="">
        <label for="name" 
        class="label">Name</label>
        <input type="text" 
        id="name" 
        placeholder="Rocio Quigua López" 
        class="input input-name" />
        <label for="email" 
        class="label">Email address</label>
        <input type="text" 
        id="email" 
        placeholder="rocioquigua3@gmail.com" 
        class="input input-email" />
        <label for="email" 
        class="label">Password</label>
        <input type="password" 
        id="password" 
        placeholder="*************" 
        class="input input-password" />
        <input type="submit" 
        value="Create" 
        class="primary-button 
        create-button" />
      </form>
    </div>
  </div>
  );
};