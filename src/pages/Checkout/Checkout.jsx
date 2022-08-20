import React from 'react';
import { OrderItem } from '../../components/OrderItem/OrderItem';

export const Checkout = () => {
  return (
    <div className='checkout'>
      <div className='checkout__container'> 
        <h1 className='checkout__title'>My Order</h1>
        <div className='checkout__content'>
        <div className="checkout__order">
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