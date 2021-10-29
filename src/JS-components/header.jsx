import React from 'react';
import ProjectsToggle from './projects.jsx'
import SkillsToggle from './skills.jsx'
import AboutToggle from './about.jsx'
import ContactToggle from './contact.jsx'

const Header = () => {
  return (

    <div className="header">
      <AboutToggle />
      <ProjectsToggle />
      <SkillsToggle />
      <ContactToggle />
    </div>
    )
};

export default Header;
