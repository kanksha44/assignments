import React, { useState } from "react";

const Deletebtn = () => {

  const [arr, setArr] = useState(["name1", "name2", "name3", "name4", "name5"]);


  const handleDeletebtn = (delindex) => {
    setArr(arr.filter((item, index) => index !== delindex));
  };

  return (
    <div>
      {arr.map((item, index) => {
        return (
          <div className="delete" key={index}>
            {item}
            <button className="btn" onClick={() => handleDeletebtn(index)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default Deletebtn;
