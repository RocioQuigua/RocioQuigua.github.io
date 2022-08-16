import React from 'react';
import { OrdenItem } from '../components/OrderItem';

export const MyOrder = () => {
  return (
    <aside class="product-detail">
    <div class="title-container">
      <img src="./icons/flechita.svg" alt="arrow" />
      <p class="title">My order</p>
    </div>
    <div class="my-order-content">
      <OrdenItem />
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