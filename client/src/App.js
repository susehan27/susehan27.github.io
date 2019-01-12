import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="row">
          <Navbar/>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/projects" component={Projects}/>
              <Route exact path="/about" component={About}/>
            </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
