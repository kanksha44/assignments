import React, { useState } from "react";
import "./nameupdater.css";

const Nameupdater = () => {
  const [name, setName] = useState("");
  const [submittedName, setSubmittedName] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedName(name);
    setName("");
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div className="name-updater">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add your name"
          value={name}
          onChange={handleNameChange}
        />
        <button type="submit">Submit</button>
      </form>
      {<h1>My name is: {submittedName ? submittedName : ""} </h1>}
    </div>
  );
};

export default Nameupdater;
