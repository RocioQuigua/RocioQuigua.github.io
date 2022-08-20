import React from 'react';
import { OrderItem } from '../../components/OrderItem/OrderItem';
import './MyOrder.scss';

export const MyOrder = () => {
  return (
    <aside className="myOrder">
    <div className="myOrder__container">
      <img src="images/flechita.svg" alt="flechita" />
      <p className="myOrder__title">My order</p>
    </div>
    <div className="myOrder__content">
      <OrderItem />
      <div className="myOrder__orders">
					<p>
						<span>Total</span>
					</p>
					<p>$560.00</p>
				</div>
				<button className="myOrder__primary-button">
					Checkout
				</button>
			</div>
		</aside>
  );
};