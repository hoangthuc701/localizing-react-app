import React from "react";
import logo from "../logo.png";

const Navbar = () => (
  <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <a className="navbar-item" href="/">
        <img className="navbar-logo" src={logo} alt="logo" />
        <strong>My store</strong>
      </a>
    </div>
    <div className="navbar-menu">
      <div className="navbar-start">
        <a className="navbar-item" href="/">
          Weekly Basket
        </a>
      </div>
    </div>
  </nav>
);

export default Navbar;