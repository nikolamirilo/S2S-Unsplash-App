import React from "react";
import logo from "../../../../assets/images/Logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/">Contact</Link>
        <Link to="/">Images</Link>
      </div>
    </nav>
  );
};

export default Navbar;
