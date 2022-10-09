import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { useTheme } from "./../../context/ThemeContext";

const Layout = ({ children }) => {
  const { theme } = useTheme();
  return (
    <div className="layout">
      <div className="navbar-container">
        <Navbar />
      </div>
      <main className="app" style={theme}>
        {children}
      </main>
      <div className="footer-container">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
