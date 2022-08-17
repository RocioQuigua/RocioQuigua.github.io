import React from 'react';
import { OrderItem } from '../components/OrderItem';
import '../styles/MyOrder.scss';

export const MyOrder = () => {
  return (
    <aside class="myOrder">
    <div class="title-container">
      <img src="./icons/flechita.svg" alt="arrow" />
      <p class="title">My order</p>
    </div>
    <div class="my-order-content">
      <OrderItem />
      <div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>$560.00</p>
				</div>
				<button className="primary-button">
					Checkout
				</button>
			</div>
		</aside>
  );
};