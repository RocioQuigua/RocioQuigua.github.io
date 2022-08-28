import React, { useState } from 'react';

//import addToCart from 'images/bt_add_to_cart';
import './ProductItem.scss';

export const ProductItem = ({product}) => {
  const [cart, setCart] = useState([]);

  const handleClick = () => {
    setCart([]);
  }

  return (
      <div className="productItem">
        <img src={product.images[0]} alt={product.title} />
        <div className="productItem__info">
          <div>
            <p>${product.price}</p>
            <p>{product.title}</p>
          </div>
          <figure onClick={handleClick}>
            <img src='images/bt_add_to_cart' alt='' />
          </figure>
        </div>
      </div>
  );
};