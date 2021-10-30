import React from 'react';
import ProjectsToggle from './projects.jsx'
import SkillsToggle from './skills.jsx'
import AboutToggle from './about.jsx'
import ContactToggle from './contact.jsx'
import Navbar from './Navbar/navIndex.jsx'
import {BrowserRouter as Router} from 'react-router-dom';

function Header(){
  return (

    <div className="header">
      <Router>
        <Navbar />
      </Router>
      <AboutToggle />
      <ProjectsToggle />
      <SkillsToggle />
      <ContactToggle />
    </div>
    )
};

export default Header;
