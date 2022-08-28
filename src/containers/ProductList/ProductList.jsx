import React from 'react';

import { ProductItem } from '../../components/ProductItem/ProductItem';
import { useGetProducts } from '../../hooks/useGetProducts';

import './ProductList.scss';

const API = 'https://api.escuelajs.co/api/v1/products';

export const ProductList = () => {
  const products = useGetProducts(API);
  return (
    <section className='mainContainer'>
      <div className='productList'>
        {products.map((product) => (
        <ProductItem product={product} key={product.id}/>
        ))}
      </div>
    </section>
  );
};