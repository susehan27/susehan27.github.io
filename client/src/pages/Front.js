import React, { Component } from "react";
import Home from "./Home";
import Intro from "./Intro";
import Blog from "./Blog";
import Projects from "./Projects";
import About from "./About";

class Front extends Component {

    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Home/>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Intro/>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Projects/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Front;
