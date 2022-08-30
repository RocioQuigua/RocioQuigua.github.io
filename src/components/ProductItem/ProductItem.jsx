import React, { useContext } from 'react';

import { AppContext } from '../../context/AppContext';
import  addToCartImage  from '../../assets/images/bt_add_to_cart.svg';
import './ProductItem.scss';

export const ProductItem = ({product}) => {
  const { addToCart } = useContext(AppContext);
 
  const handleClick = item => {
    addToCart(item);
  }

  return (
      <div className="productItem">
        <img src={product.images[0]} alt={product.title} />
        <div className="productItem__info">
          <div>
            <p>${product.price}</p>
            <p>{product.title}</p>
          </div>
          <figure onClick={() => handleClick(product)}>
            <img src={addToCart} alt='' />
          </figure>
        </div>
      </div>
  );
};