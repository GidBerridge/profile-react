import React, { Component } from 'react';
import Vinyl from './vinyl.jsx'
import Refuge from './refuge.jsx'
import Spanner from './spanner.jsx'

class Projects extends Component {
  render() {
    return (
      <div className="projects">
        <Vinyl />
        <Refuge />
        <Spanner />
      </div>
      )
  }
};

export default Projects;

