import React from 'react';
import Vinyl from './vinyl.jsx'
import Refuge from './refuge.jsx'
import Spanner from './projects/spanner.jsx'


function ProjectsToggle() {
  const [show, setShow] = React.useState(false);
  return(
      <div className="nav-text" >
        {
          show ? <Display /> : null
        }
        <a className="nav-text" onClick={() => setShow(!show)}>Projects</a>
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

