import React, { Component } from 'react';

const Header = () => {

  // const about = document.querySelector('.about');
  // const projects = document.querySelector(".projects");
  // const skills = document.querySelector('.skills');
  // const contact = document.querySelector('.contact');

  // function unhideAbout() {
  //   about.addEventListener('click', function () {
  //     about.classList.toggle("hidden");
  //   });
  // }

  // function unhideProjects(projects) {
    // document.getElementById("projects").style.visibility = "hidden";
  //

  // function unhideSkills() {
  //   skills.addEventListener('click', function () {
  //     console.log('skills')
  //     skills.classList.toggle("hidden");
  //   });
  // }

  // about.addEventListener('click', unhideAbout);
  // unhideSkills();
  // unhideProjects()

  return (

    <div className="header">
      <div className="nav-text about"><a href="">About</a></div>
      <div className="nav-text" id="projects-btn"><a>Projects</a></div>
      <div className="nav-text skills"><a href="">Skills</a></div>
      <div className="nav-text contact"><a href="">Contact</a></div>
    </div>
    )
};

export default Header;
