// Hamburger.jsx
import React from 'react';

const Hamburger = ({ toggleMenu }) => {
  return (
    <div className="hamburger" onClick={toggleMenu}>
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
    </div>
  );
};

export default Hamburger;