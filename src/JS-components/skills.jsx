import React, { Component } from 'react';
import tech_img from '../img/tech_stack.png'

class Skills extends Component {
  render() {
    return (
        <img src={tech_img} alt="tech stack" className="skills hidden" />
      )
  }
};

export default Skills;
