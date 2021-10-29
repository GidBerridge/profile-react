import React from 'react';
import tech_img from '../img/tech_stack.png'

function SkillsToggle() {
  const [show, setShow] = React.useState(false);
  return(
      <div className="nav-text" >
        {
          show ? <img src={tech_img} alt="tech stack" className="skills" /> : null
        }
        <a className="nav-text" onClick={() => setShow(!show)}>Skills</a>
      </div>
  );
}


export default SkillsToggle;
