import React, { useState } from 'react';
import Vinyl from './vinyl.jsx'
import Refuge from './refuge.jsx'
import Spanner from './spanner.jsx'

class Projects extends useState {

  render() {
    <Toggle />



  function Toggle() {
    const [show, setShow] = useState(false);
    return(
        <div className="nav-text">
          {
            show ? <Display /> : null
          }
          <button onClick={() => setShow(!show)}>Projects</button>
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
  }
}
}
export default Projects;

