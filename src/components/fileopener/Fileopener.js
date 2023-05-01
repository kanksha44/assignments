import React, { useRef } from "react";

const Fileopener = () => {
  const inputRef = useRef(null);
  //console.log(inputRef, "1st console useref");
  
  const handleButtonClick = () => {
    inputRef.current.click();
    //   console.log(inputRef.current.click(), "2nd console");
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    console.log("Selected file:", selectedFile);
  };

  return (
    <div>
      <input
        style={{ display: "none" }}
        type="file"
        ref={inputRef}
        onChange={handleFileChange}
      />
      <button
        style={{
          width: "180px",
          height: "30px",
          margin: "10px",
          backgroundColor: "red",
        }}
        onClick={handleButtonClick}
      >
        Pick the file
      </button>
    </div>
  );
};

export default Fileopener;
