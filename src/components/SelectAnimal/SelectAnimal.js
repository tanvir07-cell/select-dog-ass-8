import React, { useState } from "react";
import "./SelectAnimal.css";

const SelectAnimal = ({ dogBtn, randomHandleClick }) => {
  //   dogBtn returns an array of object so use for...of loop:

  let dogName = "",
    dogImg;

  // when select more than 5;
  if (dogBtn.length >= 5) {
    alert("you have to select only 4 item");
  } else {
    for (const dog of dogBtn) {
      dogName = dogName + dog.name;

      dogImg = dog.img;
    }
    return (
      <div className="select-animal">
        <h2 className="select-animal--name">Selected Animals</h2>

        <div className="display-dog">
          <h5>Dog Name : {dogName}</h5>

          <img src={dogImg} alt="" />
        </div>
        <button
          className="random-btn"
          onClick={() => randomHandleClick(dogBtn)}
        >
          Choose Randomly
        </button>
      </div>
    );
  }

  // const [randomDog, setRandomDog] = useState([]);

  // const randomHandleClick = (dogBtn) => {
  //   const pickedDogArr = [...randomDog, dogBtn];
  //   setRandomDog(pickedDogArr);
  //   console.log(pickedDogArr);
  // };

  // const [randomDog, setRandomDog] = useState([]);

  // const randomHandleClick = (dogBtn) => {
  //   const pickedDog = [...randomDog, dogBtn];

  //   setRandomDog(pickedDog);
  //   console.log(pickedDog);
  // };
};

export default SelectAnimal;
