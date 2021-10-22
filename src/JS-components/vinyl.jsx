import React, { Component } from 'react';
import vinyl from '../img/vinyltracer_screenshot.jpg'

class Vinyl extends Component {
  render() {
    return (
        <img src={vinyl} alt="vinyltracer screenshot" className="vinyl" />
      )
  }
};

export default Vinyl;

