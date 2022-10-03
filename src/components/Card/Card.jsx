import React from "react";

const Card = (props) => {
  return (
    <div
      className="card"
      onClick={() => {
        window.location.href = `photos/${props.id}`;
      }}
    >
      <img src={props.image} alt="Unsplash image" />
    </div>
  );
};

export default Card;
