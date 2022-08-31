import React, { useContext } from 'react';

import { OrderItem } from '../../components/OrderItem/OrderItem';
import { AppContext } from '../../context/AppContext';

import './MyOrder.scss';

export const MyOrder = () => {
  const { state } = useContext(AppContext);

  const sumTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
    const sum = state.cart.reduce(reducer, 0);
    return sum;
  }

  return (
    <aside className="myOrder">
    <div className="myOrder__container">
      <img src="../../assets/images/flechita.svg" alt="flechita" />
      <p className="myOrder__title">My order</p>
    </div>
    <div className="myOrder__content">
      {state.cart.map((product, index) => (
      <OrderItem 
      product={product}
      index={index}
      key={`orderItem-${product.id}${index.id}`}
      />
      ))}
      <div className="myOrder__orders">
					<p>
						<span>Total</span>
					</p>
					<p>${sumTotal()}</p>
				</div>
				<button className="myOrder__primary-button">
					Checkout
				</button>
			</div>
		</aside>
  );
};