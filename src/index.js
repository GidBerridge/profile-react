// Import react and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";
import SearchParams from "./searchParams";

// Create React component

const App = () => {
  return (
    <SearchParams />
  );
};

// Take React component and show on screen

ReactDOM.render(<App />, document.querySelector("#root"));

if (module.hot) {
  module.hot.accept()
}
