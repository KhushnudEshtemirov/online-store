import React from "react";
import { Link } from "react-router-dom";

import "./header.styles.scss";
import Logo from "../../assets/favicon.png";

const Header = () => (
  <div className="header">
    <Link className="logo-container" to="/">
      <img src={Logo} alt="logo" className="logo" width="80" />
    </Link>
    <div className="options">
      <div className="option">
        <Link to="/shop">SHOP</Link>
      </div>
      <div className="option">
        <Link to="/contact">CONTACT</Link>
      </div>
      <div className="option">
        <Link to="/signin">SIGN IN</Link>
      </div>
    </div>
  </div>
);

export default Header;
