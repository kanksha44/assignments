import React, { useState } from "react";
import "./counterapp.css";

const Counterapp = () => {
  const [count, SetCount] = useState(0);

  function handleIncreaseCount() {
    return SetCount(count + 1);
  }
  function handleDecreaseCount() {
    return count !== 0 ? SetCount(count - 1) : SetCount(0);
  }

  return (
    <div className="counter-app">
      <button onClick={handleIncreaseCount}>Increase count</button>
      <p> my count is {count}</p>
      <button onClick={handleDecreaseCount}>Decrease count</button>
    </div>
  );
};

export default Counterapp;
