import React from "react";
import './ProductInfo.scss';

export const ProductInfo = () => {
  return (
    <>
      <img
        src="https://images.pexels.com/photos/2949293/pexels-photo-2949293.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
        alt="Motocicleta"
      />
      <div className="productInfo">
        <p>$2.500.000</p>
        <p>Motorcycle</p>
        <p>With this motorcycle can to go at magic places, it is great!</p>
        <button className="productInfo__button productInfo__button--add-cart">
          <img src="images/bt_add_to_cart.svg" alt="Add to cart" />
          Add to cart
        </button>
      </div>
    </>
  );
};
