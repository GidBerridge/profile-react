import React, { useState } from 'react';

const Header = () => {


  return (

    <div className="header">
      <div className="nav-text about"><a href="">About</a></div>
      <button className="nav-text projects-btn"><a>Projects</a></button>
      <div className="nav-text skills"><a href="">Skills</a></div>
      <div className="nav-text contact"><a href="">Contact</a></div>
    </div>
    )
};

export default Header;
