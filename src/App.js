import React, { Component } from "react";
import Header from "./JS-components/header.jsx";
import Skills from "./JS-components/skills.jsx";
import "./sass/index.scss";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Skills />
    </div>
  );
};

export default App;
