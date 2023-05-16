import React, { useState } from "react";
import { FaGlobe, FaBars, FaTimes } from "react-icons/fa";
import logo from "./../../logo.png";
import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleBar = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <div className="nav">
        <div className="logo">
          <FaGlobe />
          <img src={logo} alt="logoimage" />
        </div>
        <div className="menu">
          <ul>
            <Link to="/">Home</Link>
            <Link to="/Aboutus">About Us</Link>
            <Link to="/Register">Register</Link>
            <Link to="/Contact">Contact</Link>
            <Link className="active" to="/Login">
              Login
            </Link>
          </ul>
          <div className="hamburger" onClick={toggleBar}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>

       

      <div className={`sidebar ${menuOpen ? "show" : ""}`}>
        <ul>
        <Link to="/">Home</Link> <pre/>
            <Link to="/Aboutus">About Us</Link><pre/>
            <Link to="/Register">Register</Link><pre/>
            <Link to="/Contact">Contact</Link><pre/>
            <Link className="active" to="Login">Login</Link>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
