import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          Home
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/pages/about' activeStyle>
            About
          </NavLink>
          <NavLink to='/pages/projects' activeStyle>
            Projects
          </NavLink>
          <NavLink to='/pages/skills' activeStyle>
            Skills
          </NavLink>
          <NavLink to='/pages/contact' activeStyle>
            Contact
          </NavLink>
        </NavMenu>
        <NavBtn>
           <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
