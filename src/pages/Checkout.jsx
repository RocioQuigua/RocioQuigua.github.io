import React from 'react';

export const Checkout = () => {
  return (
    <div className='Checkout'>
      <div className='Checkout-container'> 
        <h1 className='title'>My Order</h1>
        <div className='Checkout-content'>
        <div className="order">
          <p>
            <span>26.11.2021</span>
            <span>3 articles</span>
          </p>
          <p>$600.000</p>
        </div>
        </div>
      </div>
    </div>
  );
};