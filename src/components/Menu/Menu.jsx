import React from "react";
import "./Menu.scss";

export const Menu = () => {
  return (
    <div className="menu">
      <ul>
        <li>
          <a href="/" className="menu__title">My orders</a>
        </li>
        <li>
          <a href="/">My account</a>
        </li>
        <li>
          <a href="/">Sign out</a>
        </li>
      </ul>
    </div>
  );
};
