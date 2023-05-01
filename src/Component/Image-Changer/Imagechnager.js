import React, { useRef } from "react";

const Imagechanger = () => {
  const myref = useRef(null);

  const handleClick = () => {
    myref.current.src = "https://picsum.photos/id/20/200/300";
  };

  return (
    <div>
      <img
        ref={myref}
        src="https://picsum.photos/id/10/200/300"
        alt="Image is selected"
      />
      <br />
      <button onClick={handleClick}>Change Image</button>
    </div>
  );
};

export default Imagechanger;
