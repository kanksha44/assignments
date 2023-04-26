import React, { useState } from "react";

const Nameupdater = () => {
  const [name, setName] = useState("");
  const [submittedName, setSubmittedName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedName(name);
    setName("");
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add your name"
          value={name}
          onChange={handleNameChange}
        />
        <button type="submit">Submit</button>
      </form>
      <h1>My name is {submittedName ? submittedName : " "} </h1>
    </div>
  );
};

export default Nameupdater;
