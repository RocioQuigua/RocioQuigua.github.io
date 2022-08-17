import React from "react";
import '../styles/Order.scss';

export const Order = () => {
  return (
    <div className="order">
      <p>
        <span>26.11.2021</span>
        <span>3 articles</span>
      </p>
      <p>$600.000</p>
      <img src="./icons/flechita.svg" alt="arrow" />
    </div>
  );
};
