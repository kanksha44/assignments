import React, { useState } from "react";

const Deletebtn = () => {
  const [arr, setArr] = useState(["name1", "name2", "name3", "name4", "name5"]);
  const [newname, setNewName] = useState(" ");

  const handleDeletebtn = (delindex) => {
    setArr(arr.filter((item, index) => index !== delindex));
  };

  const handleNewName = (e) => {
    if (e.key === "Enter") {
      setArr([...arr, newname]);
      setNewName(" ");
    }
  };

  return (
    <div>
      {arr.map((item, index) => {
        return (
          <div className="delete" key={index}>
            {item}
            <button className="btn" onClick={() => handleDeletebtn(index)}>
              Delete
            </button>
          </div>
        );
      })}
      <input
        type="text"
        value={newname}
        onKeyDown={handleNewName}
        onChange={(e) => setNewName(e.target.value)}
        placeholder="Add your name"
      />
    </div>
  );
};

export default Deletebtn;
