import React from "react";

export const ProductInfo = () => {
  return (
    <div>
      <img
        src="https://images.pexels.com/photos/2949293/pexels-photo-2949293.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
        alt="Motocicleta"
      />
      <div class="product-info">
        <p>$2.500.000</p>
        <p>Motorcycle</p>
        <p>With this motorcycle can to go at magic places, it is great!</p>
        <button class="primary-button add-to-cart-button">
          <img src="./icons/bt_add_to_cart.svg" alt="Add to cart" />
          Add to cart
        </button>
      </div>
    </div>
  );
};
