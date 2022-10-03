import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <div className="navbar-container">
        <Navbar />
      </div>
      <main className="app">{children}</main>
      <div className="footer-container">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
