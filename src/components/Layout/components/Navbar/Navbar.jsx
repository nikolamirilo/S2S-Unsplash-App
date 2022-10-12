import React, { useState } from "react";
import logo from "../../../../assets/images/Logo.png";
import { useNavigate } from "react-router-dom";
import { useGlobalState } from "./../../../../context/GlobalContext";
import { GiHamburgerMenu } from "react-icons/gi";
import { useThemeContext } from "./../../../../context/ThemeContext";
import { scrollFunction } from "../../../../helpers/scrollFunction";

const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false);
  const { width } = useGlobalState();
  const { theme, setDark, setLight } = useThemeContext();
  const { contactSection, itemsSection } = useGlobalState();
  const navigate = useNavigate();
  const handleHamburgerClick = () => {
    if (isClicked) {
      setIsClicked(false);
    } else {
      setIsClicked(true);
    }
  };
  const closeSidebarOnLinkClick = () => {
    if (width < 600) {
      setIsClicked(false);
    }
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="navigation">
        {width < 600 && (
          <button
            className="hamburger"
            onClick={() => {
              handleHamburgerClick();
            }}
          >
            <GiHamburgerMenu size={40} />
          </button>
        )}

        <div className="links" style={{ display: !isClicked && width < 600 && "none" }}>
          <button
            onClick={() => {
              navigate("/");
              closeSidebarOnLinkClick();
            }}
          >
            Home
          </button>
          <button
            onClick={() => {
              scrollFunction(contactSection);
              closeSidebarOnLinkClick();
            }}
          >
            Contact
          </button>
          <button
            onClick={() => {
              scrollFunction(itemsSection);
              closeSidebarOnLinkClick();
            }}
          >
            Images
          </button>
          <button
            onClick={() => {
              theme.backgroundColor === "white" ? setDark() : setLight();
              setIsClicked(false);
            }}
          >
            {theme.backgroundColor === "white" ? "Dark Theme" : "Light Theme"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
