import React from 'react';
import { ProductInfo } from '../components/ProductInfo';

export const ProductDetail = () => {
  return (
    <aside className='ProductDetail'>
      <div className='ProductDetail-close'>
      <img src="./icons/icon_close.png" alt="Close" />
      </div>
      <ProductInfo />
    </aside>
  );
};