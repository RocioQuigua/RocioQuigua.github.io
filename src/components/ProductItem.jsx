import React from 'react';
import '../styles/ProductItem.scss';

export const ProductItem = () => {
  return (
      <div class="productItem">
        <img src="https://images.pexels.com/photos/3759740/pexels-photo-3759740.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"  alt="" class="product-img" />
        <div class="product-info">
          <div>
            <p>$150,00</p>
            <p>Motorcycle</p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="" />
          </figure>
        </div>
      </div>
  );
};