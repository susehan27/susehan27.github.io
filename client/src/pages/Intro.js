import React, {Component} from "react";

class Intro extends Component {
    render() {
        return(
            <div className="col-md-12">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is another card with title and supporting text below. This card has some additional content to make it slightly taller overall.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Intro;