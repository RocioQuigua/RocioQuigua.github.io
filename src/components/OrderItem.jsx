import React from "react";
import '../styles/OrderItem.scss';

export const OrderItem = () => {
  return (
    <div className="orderItem">
      <figure>
        <img
          src="https://images.pexels.com/photos/8526787/pexels-photo-8526787.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt=""
          className="product-img"
        />
      </figure>
      <p>Motorcycle</p>
      <p>$200.000</p>
      <img src="./icons/icon_close.png" alt="Close" />
    </div>
  );
};
