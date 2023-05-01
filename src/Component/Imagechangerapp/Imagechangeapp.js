import React, { useState, useEffect } from "react";

const Imagechangeapp = () => {
  const [image, setImage] = useState("https://picsum.photos/id/10/200/300");

  useEffect(() => {
    setImage("https://picsum.photos/id/10/200/300");
  }, []);

  const handleClick = () => {
    setImage("https://picsum.photos/id/20/200/300");
  };

  return (
    <div>
      <img src={image} alt="Image" />
      <br />
      <button onClick={handleClick}>Change Image</button>
    </div>
  );
};

export default Imagechangeapp;
