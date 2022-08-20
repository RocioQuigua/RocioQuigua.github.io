import React from 'react';
import { ProductInfo } from '../../components/ProductInfo/ProductInfo';
import './ProductDetail.scss';

export const ProductDetail = () => {
  return (
    <aside className='productDetail'>
      <div className='productDetail__close'>
      <img src="images/icon_close.png" alt="Close" />
      </div>
      <ProductInfo />
    </aside>
  );
};