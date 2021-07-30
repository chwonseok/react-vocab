import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <h1>
        <Link to="/">한국어 단어 공부</Link>
      </h1>
      <div className="menu">
        <a href="#x" className="link">
          Add Words
        </a>
        <a href="#x" className="link">
          Add Day
        </a>
      </div>
    </div>
  );
};

export default Header;
