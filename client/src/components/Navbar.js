import React, {Component} from "react";
import {Link} from "react-router-dom";

class Navbar extends Component {
    render() {
        return(
            <div className="col-md-2" style={{height: "100vh", height: "100vh", display: "flex", alignItems: "center"}}>
                <nav class="navbar-fixed flex-column" style={{position: "fixed", padding: "50px", float: "right", textAlign: "right"}}>
                    
                        <Link
                            to="/"
                            className="nav-link oswaldl gray"
                        >
                        <h4>SUSCODES</h4>
                        </Link>
                        <Link
                            to="/projects"
                            className="nav-link rasa gray"
                        >
                        projects
                        </Link>
                        <Link
                            to="/blog"
                            className="nav-link rasa gray"
                        >
                        blog
                        </Link>
                        <Link
                            to="/about"
                            className="nav-link rasa gray"
                        >
                        about
                        </Link>
                    
                </nav>
            </div>
        )
    }
};

export default Navbar;