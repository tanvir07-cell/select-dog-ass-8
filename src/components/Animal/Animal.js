import React, { useEffect, useState } from "react";
import Dog from "../Dog/Dog";
import SelectAnimal from "../SelectAnimal/SelectAnimal";
import "./Animal.css";

const Animal = () => {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    fetch("Animals.json")
      .then((res) => res.json())
      .then((data) => setDogs(data));
  }, []);

  //   for dog component's purchase button:

  const [dogBtn, setDogBtn] = useState([]);
  const handleClick = (dog) => {
    const newDog = [...dogBtn, dog];
    setDogBtn(newDog);
  };

  const [randomDog, setRandomDog] = useState([]);

  let randomPickedDog;

  const randomHandleClick = (dog) => {
    const pickedDogArr = [...randomDog, dog];

    setRandomDog(pickedDogArr);

    let randomPickedDog =
      pickedDogArr[Math.floor(Math.random() * pickedDogArr.length)];
    console.log(pickedDogArr);
    console.log(randomPickedDog);
  };
  return (
    <div className="animal-container">
      <div className="animals">
        {dogs.map((dog) => (
          <Dog dog={dog} key={dog.id} handleClick={handleClick}></Dog>
        ))}
      </div>

      {/* selected animal */}
      <div className="selected-animal">
        <SelectAnimal
          dogBtn={dogBtn}
          randomHandleClick={randomHandleClick}
          randomPickedDog={randomPickedDog}
        ></SelectAnimal>
      </div>
    </div>
  );
};

export default Animal;
