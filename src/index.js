// Import react and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";
import Header from "./JS-components/header";
import "./sass/index.scss";

// Create React component

const App = () => {
  return (
    <div className="container">
      <Header />
    </div>
  );
};

// Take React component and show on screen

ReactDOM.render(<App />, document.querySelector("#root"));

if (module.hot) {
  module.hot.accept()
}
