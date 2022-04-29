import React, { useState } from "react";
import "./Dog.css";

// font awesome icon:
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";

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
        <p>Purchase Dog</p>
        <FontAwesomeIcon icon={faBagShopping} />
      </button>
    </div>
  );
};

export default Dog;
