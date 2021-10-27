import React, { Component } from 'react';
import vinyl from '../img/vinyltracer_screenshot.jpg'

class Vinyl extends Component {
  render() {
    return (
      <div class="card-project">
        <img src={vinyl} alt="vinyl hq screenshot" />
        <div class="card-project-infos">
          <div>
            <h2 className="card-project-infos title">www.vinyltracer.com</h2>
            <h2 className="card-project-infos">Ruby on Rails</h2>
            <p>A music suggestion app built in Rails.</p>
            <p>Working in a small agile team,  I was involved in both the front and back end.</p>
            <p>The app utilises web scraping and accesses an API for the data</p>
            <p>and also includes a hard coded database.</p>
          </div>
        </div>
      </div>
      )
  }
};

export default Vinyl;

