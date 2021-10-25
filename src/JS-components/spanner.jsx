import React, { Component } from 'react';
import spanner from '../img/spanner_screenshot.jpg'

class Spanner extends Component {
  render() {
    return (
      <div className="card-project">
        <img src={spanner} alt="spanner hq screenshot" />
        <div className="card-project-infos">
          <div>
            <h2 className="card-project-infos title">www.spannerhq.com</h2>
            <h2 className="card-project-infos">Wordpress</h2>
            <p>Short description here!</p>
          </div>
        </div>
      </div>
      )
  }
};

export default Spanner;



