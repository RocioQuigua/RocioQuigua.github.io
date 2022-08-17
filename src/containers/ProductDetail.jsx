import React from 'react';
import { ProductInfo } from '../components/ProductInfo';
import '../styles/ProductDetail.scss';

export const ProductDetail = () => {
  return (
    <aside className='productDetail'>
      <div className='productDetail-close'>
      <img src="./icons/icon_close.png" alt="Close" />
      </div>
      <ProductInfo />
    </aside>
  );
};