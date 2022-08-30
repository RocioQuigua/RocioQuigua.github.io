import React, { useContext } from "react";

import { AppContext } from "../../context/AppContext";
import './OrderItem.scss';

export const OrderItem = ({ product }) => {
  const { removeFromCart } = useContext(AppContext);

  const handleRemove = index => {
    removeFromCart(index);
  }

  return (
    <div className="orderItem">
      <figure>
        <img
          src={ product.images[0] }
          alt={ product.title }
        />
      </figure>
      <p>{ product.title }</p>
      <p>${ product.price }</p>
      <img src="images/icon_close.png" 
      alt="Close" 
      onClick={() => handleRemove(product)}/>
    </div>
  );
};
