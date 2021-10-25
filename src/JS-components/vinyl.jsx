import React, { Component } from 'react';
import vinyl from '../img/vinyltracer_screenshot.jpg'

class Vinyl extends Component {
  render() {
    return (
      <div class="card-project">
        <img src={vinyl} alt="vinyl hq screenshot" />
        <div class="card-project-infos">
          <div>
            <h2>Title here</h2>
            <p>Short description here!</p>
          </div>
        </div>
      </div>
      )
  }
};

export default Vinyl;

