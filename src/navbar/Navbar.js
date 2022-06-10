import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="sidebar">
        <a href="/home">Home1</a>
        <a href="/about">About1</a>
        <a href="/service">Service1</a>
        <a href="/contact">Contact1</a>
      </div>
      <div className="Navbar">
        <span className="nav-logo">DevLHB</span>
        <div className={`nav-items ${isOpen && "open"}`}>
          <a href="/home">Home</a>
          <a href="/about">About</a>
          <a href="/service">Service</a>
          <a href="/contact">Contact</a>

          <div className={isOpen ? "show" : "hide"}>
            <a href="/home">Home1</a>
            <a href="/about">About1</a>
            <a href="/service">Service1</a>
            <a href="/contact">Contact1</a>
          </div>
        </div>
        <div
          className={`nav-toggle ${isOpen && "open"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="bar"></div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
