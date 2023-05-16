import React from "react";
import picture from "./../../picture.jpg";
import { BsFillPlayFill } from "react-icons/bs";

const Home = () => {
  return (
    <div>
      <div className="hero">
        <div className="hero_image">
          <img src={picture} alt="hero" />
        </div>
        <div className="hero_content">
          <div className="hero_text">
            <h1>Be There</h1>
            <p>Deliver Brilliant Message in the moments that truly define.</p>
          </div>
          <div className="hero_btn">
            <button>
              <a href="#">See How</a> <BsFillPlayFill />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
