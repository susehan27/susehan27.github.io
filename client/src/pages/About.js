import React, {Component} from "react";
import profile from "./images/profile1.jpg";
import lantern from "./images/lantern.jpg";

class About extends Component {
    

    render() {
        return(
            <div className="col-md-12" style={{display: "flex", alignItems: "center"}}>
                <div className="row">
                    <div className="card" style={{margin: "15px", padding: "20px", backgroundImage: `url(${profile})`, backgroundSize: "cover", backgroundPosition: "center", height: "80vh", width: "30vh"}}>
                    </div>
                    <div className="card" style={{overflow: "scroll", margin: "15px", padding: "20px", backgroundColor: "#343432", height: "80vh", width: "30vh"}}>
                        <h1 className="white oswaldb">SUSANNA HAN</h1>
                        <p className="white rasa">I am a new full stack web developer looking for opportunities in the Philly area! I have special interest in front-end development and my main goal is to build simple and unique websites! <br></br><br></br>My coding skills include: HTML, CSS, JavaScript, jQuery, React, Express, Node, MongoDB/Mongoose, MySQL/Sequelize</p>
                    </div>
                    <div className="d-flex flex-column">
                    <div className="card" style={{margin: "15px", padding: "20px", backgroundImage: `url(${lantern})`, backgroundSize: "cover", backgroundPosition: "center", height: "38vh", width: "30vh"}}>   
                    </div>
                    <div className="card" style={{margin: "15px", padding: "20px", border: "none", backgroundColor: "#f9f5f0", height: "38vh", width: "30vh"}}>   
                        <a className="btn white robotoc" href="https://www.linkedin.com/in/susehan" style={{margin: "8px", backgroundColor: "#1178b3"}}>LinkedIn</a>
                        <a className="btn white robotoc" href="https://github.com/susehan27/" style={{margin: "8px", backgroundColor: "#24292d"}}>GitHub</a>
                        <a className="btn white robotoc" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample" style={{margin: "8px", backgroundColor: "#ff7456"}}>Email</a>
                        <div className="collapse" id="collapseExample">
                            <div className="card card-body rasa" style={{fontSize: "14px", padding: "5px", textAlign: "center"}}>
                                <p>susannahan27@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="card" style={{margin: "15px", padding: "20px", backgroundColor: "#343432", height: "80vh", width: "30vh"}}>
                        <h4 className="white oswaldl">web development</h4>
                        <br></br>
                        <h4 className="white oswaldl">photography</h4>
                        <br></br>
                        <h4 className="white oswaldl">videography</h4>
                        <br></br>
                        <h4 className="white oswaldl">tasty music</h4>
                        <br></br>
                        <h4 className="white oswaldl">amazing food</h4>
                        <br></br>
                        <h4 className="white oswaldl">cafe finding</h4>
                        <br></br>
                        <p className="white rasa">...are just some of my interests and hobbies in which i love to continuously expand and explore!!</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;