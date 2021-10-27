// Import react and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// Create React component

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(
    <App />, root
  );
}

// Take React component and show on screen

if (module.hot) {
  module.hot.accept()
}
