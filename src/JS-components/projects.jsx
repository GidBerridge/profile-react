import React from 'react';
import Vinyl from './vinyl.jsx'
import Refuge from './refuge.jsx'
import Spanner from './spanner.jsx'


function ProjectsToggle() {
  const [show, setShow] = React.useState(false);
  return(
      <div className="nav-text" >
        {
          show ? <Display /> : null
        }
        <button  className="nav-text" onClick={() => setShow(!show)}>Projects</button>
      </div>
  );
}

function Display() {
  return (
    <div className="projects">
      <Vinyl />
      <Refuge />
      <Spanner />
    </div>
    )
};

export default ProjectsToggle;

