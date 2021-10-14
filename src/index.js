// Import react and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";
import SearchParams from "./searchParams";
import Header from "./JS-components/navbar"
import "./sass/index.scss";

// Create React component

const App = () => {
  return (
    <Header />
  );
};

// Take React component and show on screen

ReactDOM.render(<App />, document.querySelector("#root"));

if (module.hot) {
  module.hot.accept()
}
