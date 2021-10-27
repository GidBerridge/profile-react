import React, { Component } from 'react';

const Header = () => {

  // const about = document.querySelector('.about');
  // const projects = document.querySelector(".projects-btn");
  // const projectsPage = document.querySelector(".flag");
  // const skills = document.querySelector('.skills');
  // const contact = document.querySelector('.contact');

  //   projects.addEventListener('click', function () {
  //     projectsPage.classList.toggle("hidden");
  //   });


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
