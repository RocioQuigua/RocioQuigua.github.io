import React from 'react';
import { ProductItem } from '../../components/ProductItem/ProductItem';
import './ProductList.scss';

export const ProductList = () => {
  return (
    <section className='mainContainer'>
      <div className='productList'>
        <ProductItem />
      </div>
    </section>
  );
};