import React from "react";
import './Header.scss';

export const Header = () => {
  return (
    <nav className="navbar">
      <img src="images/icon_menu.svg" alt="Menú" class="navbar__menu" />
      <div class="navbar__left">
        <img src="logos/logo_yard_sale.svg" alt="Logo" class="navbar__logo" />
        <ul>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Cars</a>
          </li>
          <li>
            <a href="/">Motorcycles</a>
          </li>
          <li>
            <a href="/">Bicycles</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>
      <div class="navbar__right">
        <ul>
          <li class="navbar__email">rocioquigua3@gmail.com</li>
          <li class="navbar__shopping-cart">
            <img src="images/icon_shopping_cart.svg" alt="Shopping cart" />
            <div>2</div>
          </li>
        </ul>
      </div>
    </nav>
  );
};
