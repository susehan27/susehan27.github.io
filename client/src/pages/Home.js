import React, {Component} from "react";
import me from "./images/me.png";
import philly from "./images/philly.jpg";
import {Link} from "react-router-dom";

class Home extends Component {
    render() {
        return(
            <div className="col-md-12">
                <div className="homeBox">
                    <div id="frontBox" className="bwhite"  data-aos="fade-down" data-aos-duration="2000"></div>
                    <div className="intro" data-aos="fade-left" data-aos-duration="2000">
                        <p className="rasa">Hello I'm</p>
                        <h1 className="oswaldb" style={{marginTop: "-20px"}}>Susanna Han</h1>
                        <p className="rasa">a web developer in Philadelphia passionate about building <span className="oswaldb" style={{letterSpacing: "2px"}}> simple & beautiful</span> websites</p>
                        <span id="line"></span>
                    </div>
                    <img id="me" src={me} data-aos="fade-up" data-aos-duration="1500"></img>
                    <img id="philly" src={philly} data-aos="fade-right" data-aos-duration="1500"></img>
                </div>

                <div className="row">
                    <div className="col">
                        <div id="skillsLine" data-aos="fade-right" data-aos-duration="2000">
                            <span id="skills" className="oswaldl">SKILLS</span>
                        </div>
                    </div>
                </div>

                <div className="row" style={{marginTop: "100px"}}>
                    <div className="col-md-4">
                        <div className="card skills" data-aos="fade-left" data-aos-duration="1000">
                            <div className="card-body">
                                <h3>FRONT END</h3>
                                <hr></hr>
                                <p>HTML</p>
                                <p>CSS</p>
                                <p>JavaScript (ES6)</p>
                                <p>SASS</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card skills" data-aos="fade-up" data-aos-duration="1000">
                            <div className="card-body">
                                <h3>BACK END</h3>
                                <hr></hr>
                                <p>MongoDB</p>
                                <p>MySQL</p>
                                <p>Express.js</p>
                                <p>Node.js</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4" data-aos="fade-right" data-aos-duration="1000">
                        <div className="card skills">
                            <div className="card-body">
                                <h3>MORE</h3>
                                <hr></hr>
                                <p>React</p>
                                <p>Bootstrap</p>
                                <p>Heroku</p>
                                <p>NPM</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div id="projects" className="bwhite" data-aos="fade-right" data-aos-duration="1000">
                            <h1 className="oswaldl">PROJECTS <i class="far fa-lightbulb fa-sm"></i><Link to="/projects"><i class="fas fa-long-arrow-alt-right fa-lg"></i></Link></h1>
                        </div>
                        <div id="about" className="bgreyblue" data-aos="fade-left" data-aos-duration="1000">
                            <h1 className="oswaldl">ABOUT <i class="far fa-user"></i><Link to="/about"><i class="fas fa-long-arrow-alt-left fa-lg"></i></Link></h1>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Home;