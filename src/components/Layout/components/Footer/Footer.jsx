import React from "react";
import { BsFacebook, BsGoogle } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="footer">
      <div className="contact">
        <button
          onClick={() => {
            window.location.href = "mailto:unsplash@gmail.com";
          }}
        >
          <AiOutlineMail size={25} />
        </button>
        <button
          onClick={() => {
            window.location.href = "https://www.google.com/";
          }}
        >
          <BsGoogle size={25} />
        </button>
        <button
          onClick={() => {
            window.location.href = "https://www.facebook.com/";
          }}
        >
          <BsFacebook size={25} />
        </button>
      </div>
      <p>Copyright @S2S-2022</p>
    </footer>
  );
};

export default Footer;
