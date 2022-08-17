import React from "react";
import '../styles/Header.scss';

export const Header = () => {
  return (
    <nav className="navbar">
      <img src="images/icon_menu.svg" alt="Menú" class="navbar-menu" />
      <div class="navbar__left">
        <img src="logos/logo_yard_sale.svg" alt="Logo" class="navbar-logo" />
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
            <img src="images/icon_shopping_cart.svg" alt="Shopping cart" />
            <div>2</div>
          </li>
        </ul>
      </div>
    </nav>
  );
};
