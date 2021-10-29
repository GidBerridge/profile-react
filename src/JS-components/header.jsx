import React from 'react';
import ProjectsToggle from './projects.jsx'
import SkillsToggle from './skills.jsx'

const Header = () => {
  return (

    <div className="header">
      <div className="nav-text about"><a href="">About</a></div>
      <ProjectsToggle />
      <SkillsToggle />
      <div className="nav-text contact"><a href="">Contact</a></div>
    </div>
    )
};

export default Header;
