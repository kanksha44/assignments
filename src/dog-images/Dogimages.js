import React, { useState, useEffect } from "react";
import axios from "axios";

const DogImages = () => {
  const [dogImage, setDogImage] = useState(null);

  useEffect(() => {
    axios.get("https://dog.ceo/api/breeds/image/random").then((response) => {
      setDogImage(response.data.message);
    });
  }, []);

  return (
    <div>
      <img src={dogImage} alt="dog" height={"200px"} width={"200px"} />
    </div>
  );
};

export default DogImages;
