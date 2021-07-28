import React from 'react';

const Header = () => {
  return (
    <div className="header">
      <h1>
        <a href="/">English Vocabs</a>
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
