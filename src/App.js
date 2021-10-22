import React, { Component } from "react";
import Header from "./JS-components/header.jsx";
import Projects from "./JS-components/projects.jsx";
import Skills from "./JS-components/skills.jsx";
import "./sass/index.scss";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Skills />
      <Projects />
    </div>
  );
};

export default App;
