import React, { Component } from 'react';

const Header = () => {

  const about = document.querySelector('.about');
  const projects = document.querySelector('.projects');
  const skills = document.querySelector('.skills');
  const contact = document.querySelector('.contact');

  function unhideAbout() {
    about.addEventListener('click', function () {
      about.classList.toggle("hidden");
    });
  }

  function unhideSkills() {
    skills.addEventListener('click', function () {
      skills.classList.toggle("hidden");
    });
  }

  // about.addEventListener('click', unhideAbout);
  // skills.addEventListener('click', unhideSkills());

  return (

    <div className="header">
      <div className="nav-text about">About</div>
      <div className="nav-text projects">Projects</div>
      <div className="nav-text skills">Skills</div>
      <div className="nav-text contact">Contact</div>
    </div>
    )
};

export default Header;
