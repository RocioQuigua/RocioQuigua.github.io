import React from "react";
import { OrderItem } from "../../components/OrderItem/OrderItem";

export const Orders = () => {
  return (
    <div className="orders">
      <div className="orders__container"> 
        <h1 className="orders__title">My orders</h1>
        <div className="orders__content">
          <OrderItem />
        </div>
      </div>
    </div>
  );
};