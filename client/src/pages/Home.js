import React, {Component} from "react";
import flowers from "./images/flowers.jpg";
import philly2 from "./images/philly2.jpg";

class Home extends Component {
    render() {
        return(
            <div className="col-md-10" style={{height: "100vh", width: "100vh", display: "flex", alignItems: "center"}}>
                <div className="row">
                    <div className="jumbotron" style={{margin: "15px", padding: "20px", backgroundColor: "#343432", height: "80vh", width: "30vh"}}>
                        <h1 className="white oswaldb">HELLO WORLD,</h1>
                        <p className="white rasa">welcome to my site!</p>
                        <p className="white rasa">check out my projects and learn more about me as you explore through this site!</p>
                    </div>
                    <div className="jumbotron" style={{margin: "15px", padding: "20px", backgroundImage: `url(${flowers})`, backgroundSize: "cover", backgroundPosition: "center", height: "80vh", width: "30vh"}}>
                
                    </div>
                    <div className="jumbotron" style={{margin: "15px", padding: "20px", backgroundColor: "#343432", height: "80vh", width: "30vh"}}>
                        <h1 className="white oswaldb">WEB DEVELOPER</h1>
                        <p className="white rasa">full stack web development boot camp graduate</p>
                        <p className="white rasa">based in Philadelphia</p>
                    </div>
                    <div className="jumbotron" style={{margin: "15px", padding: "20px", backgroundImage: `url(${philly2})`, backgroundSize: "cover", backgroundPosition: "center", height: "80vh", width: "30vh"}}>
                        
                    </div>
                </div>
            </div>
        )
    }
};

export default Home;