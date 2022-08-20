import React from 'react';
import './ProductItem.scss';

export const ProductItem = () => {
  return (
      <div className="productItem">
        <img src="https://images.pexels.com/photos/3759740/pexels-photo-3759740.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"  alt="" />
        <div className="productItem__info">
          <div>
            <p>$150,00</p>
            <p>Motorcycle</p>
          </div>
          <figure>
            <img src="images/bt_add_to_cart.svg" alt="" />
          </figure>
        </div>
      </div>
  );
};