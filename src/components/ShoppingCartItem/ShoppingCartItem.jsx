import React from "react";
import './ShoppingCardItem.scss';

export const ShoppingCartItem = () => {
  return (
    <div className="shoppingCartItem">
      <figure>
        <img
          src="https://images.pexels.com/photos/8526787/pexels-photo-8526787.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt=""
        />
      </figure>
      <p>Motorcycle</p>
      <p>$200.000</p>
    </div>
  );
};
