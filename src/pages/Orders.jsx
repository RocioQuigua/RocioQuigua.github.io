import React from "react";
import { OrdenItem } from "../components/OrderItem";

export const Orders = () => {
  return (
    <div className="Orders">
      <div className="Orders-container"> 
        <h1 className="title">My orders</h1>
        <div className="Orders-content">
          <OrdenItem />
        </div>
      </div>
    </div>
  );
};