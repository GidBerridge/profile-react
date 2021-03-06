import React from 'react';
import './App.css';
import "./sass/index.scss";
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Projects from './pages/projects'
import Skills from './pages/skills'
import Contact from './pages/contact'

function App() {
  return (    
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/projects' component={Projects} />
        <Route path='/skills' component={Skills} />
        <Route path='/contact' component={Contact} />
      </Switch>
    </Router>
  
  );
}

export default App;
