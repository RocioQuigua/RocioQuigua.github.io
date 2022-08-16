import React from "react";

export const Header = () => {
  return (
    <nav>
      <img src="./icons/icon_menu.svg" alt="Menú" class="menu" />
      <div class="navbar-left">
        <img src="./logos/logo_yard_sale.svg" alt="Logo" class="logo" />
        <ul>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Furnitures</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>
      <div class="navbar-right">
        <ul>
          <li class="navbar-email">rocioquigua3@gmail.com</li>
          <li class="navbar-shoppping-cart">
            <img src="./icons/icon_shopping_cart.svg" alt="Shopping cart" />
            <div>2</div>
          </li>
        </ul>
      </div>
    </nav>
  );
};
