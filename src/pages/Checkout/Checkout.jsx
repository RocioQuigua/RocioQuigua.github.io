import React from 'react';
import { OrderItem } from '../../components/OrderItem/OrderItem';

export const Checkout = () => {
  return (
    <div className='checkout'>
      <div className='checkout-container'> 
        <h1 className='title'>My Order</h1>
        <div className='checkout-content'>
        <div className="order">
          <p>
            <span>26.11.2021</span>
            <span>3 articles</span>
          </p>
          <p>$600.000</p>
        </div>
        </div>
        <OrderItem />
      </div>
    </div>
  );
};