import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const cartStyles = {
    background: "#F59E0D",
    display: "flex",
    padding: "6px 12px",
    borderRadius: "50px",
  };
  return (
    <nav className="container mx-auto flex items-center justify-between py-4">
      <NavLink to="/">
        <img style={{ height: 45 }} src="/assetts/logo.png" alt="logo" />
      </NavLink>
      <ul className="flex items-center">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="ml-6">
          <NavLink to="/products">Products</NavLink>
        </li>
        <li className="ml-6">
          <NavLink to="/cart">
            <div style={cartStyles}>
              <span>12</span>
              <img className="ml-2" src="/assetts/cart.png" alt="icon" />
            </div>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
