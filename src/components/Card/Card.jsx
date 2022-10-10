import React from "react";
import { useNavigate } from "react-router-dom";

const Card = (props) => {
  const navigate = useNavigate();
  return (
    <div
      className="card"
      onClick={() => {
        if (props.type === "all-images") {
          navigate(`photos/${props.id}`);
        } else if (props.type === "similar-images") {
          window.location.pathname = `photos/${props.id}`;
        }
      }}
    >
      <img src={props.image} alt="Unsplash image" />
    </div>
  );
};

export default Card;
