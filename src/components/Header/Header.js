import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <nav className="header">
      <div className="brand">
        <h1>πΏππππ ππππππ</h1>
      </div>
      <div>
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Meal</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
