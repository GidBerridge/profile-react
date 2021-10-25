import React, { Component } from 'react';
import refuge from '../img/refuge_screenshot.jpg'

class Refuge extends Component {
  render() {
    return (
      <div class="card-project">
        <img src={refuge} alt="refuge hq screenshot" />
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

export default Refuge;


