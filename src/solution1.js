import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [image, setImage] = useState("");

  useEffect(() => {
    handleGetDog();
  }, []);

  function handleGetDog() {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => setImage(data.message))
      .catch((error) => console.log(error));
  }
  return (
    <div className="App">
      <img src={image} alt="Image" height={"200px"} width={"200px"} />
    </div>
  );
}

export default App;
