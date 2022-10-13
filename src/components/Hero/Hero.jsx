import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { scrollFunction } from "../../helpers/scrollFunction";
import { useGlobalState } from "./../../context/GlobalContext";

const Hero = () => {
  const { itemsSection } = useGlobalState();
  return (
    <div className="hero">
      <h1>Welcome to Unsplash Photo Gallery!</h1>
      <button
        className="scroll-down-btn"
        onClick={() => {
          scrollFunction(itemsSection);
        }}
      >
        <IoIosArrowDown size={50} />
      </button>
    </div>
  );
};

export default Hero;
