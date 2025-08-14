import React, { useState } from 'react';
import logo from "../assets/log.png";
import { GrLanguage } from "react-icons/gr";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState(false);

  return (
    <>
      <div className="neww">
        <img src={logo} alt="" />

        {/* Menu hover */}
        <div
          className="menu-container"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <div className="menu-icon">☰</div>
          {isOpen && (
            <div className="menu-links">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#News">News</a>
              <a href="#partners">Partners</a>
            </div>
          )}
        </div>

        {/* Language hover */}
        <div
          className="men"
          onMouseEnter={() => setLanguage(true)}
          onMouseLeave={() => setLanguage(false)}
        >
          <GrLanguage className="lan" />
          {language && (
            <div className="til">
              <a href="">uz</a>
              <a href="">eng</a>
              <a href="">ru</a>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Menu;
