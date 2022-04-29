import React, { useState } from "react";
import "./Dog.css";

const Dog = (props) => {
  //   object destructuring:

  const { name, id, img, price } = props.dog;

  const { handleClick } = props;

  return (
    <div className="dog">
      <img src={img} alt="" />
      <div className="dog-description">
        <h1>Name : {name}</h1>
        <p>Price : ${price}</p>
      </div>

      <button className="btn" onClick={() => handleClick(props.dog)}>
        Purchase Dog
      </button>
    </div>
  );
};

export default Dog;
