import React from "react";

const Card = (props) => {
  return (
    <div
      className="card"
      onClick={(e) => {
        e.preventDefault();
        window.location.pathname = `photos/${props.id}`;
      }}
    >
      <img src={props.image} alt="Unsplash image" />
    </div>
  );
};

export default Card;
