import React, {Component} from "react";
import moodify from "./images/moodify.png";
import bizzy from "./images/bizzy.jpg";
import accountability from "./images/accountability.png";
import newscrape from "./images/newscraper.png";
import crystals from "./images/crystalsCollector.png";
import rps from "./images/RPS.png";
import guess from "./images/guessTheEmoji.png";
import gif from "./images/giftastic.png";
//import friend from "./images/friendfinder.png";
//import burger from "./images/burgerTime.png";

class Projects extends Component {
    render() {
        return (
            <div className="col-md-10" style={{height: "auto", display: "flex", alignItems: "center", verticalAlign: "center"}}>
                <div className="row" style={{overflow: "scroll"}}>
                    <div className="card" style={{margin: "15px", backgroundColor: "#343432", height: "50vh", width: "30vh"}}>
                        <div className="card-body">
                            <h1 className="white oswaldb">BIZZY</h1>
                            <a className="lgray rmono" style={{fontSize: "10px"}} href="https://github.com/susehan27/bizzy_app">https://github.com/susehan27/bizzy_app</a>
                            <p className="white oswaldl">a procrastination success tool app using react.</p>
                        </div>
                        <a href="https://bizzy-sus.herokuapp.com/">
                            <img class="card-img-bottom" src={bizzy} style={{objectFit: "cover", height: "10vh"}} alt="Card image cap"></img>
                        </a>
                    </div>
                    <div className="card" style={{margin: "15px", backgroundColor:"white", height: "50vh", width: "30vh"}}>
                        <div className="card-body">
                            <h3 className="gray oswaldb">accountability</h3>
                            <a className="lgray rmono" style={{fontSize: "10px"}} href="https://github.com/susehan27/accountability">https://github.com/susehan27/accountability</a>
                            <p className="gray oswaldl">spiritual accountability CRUD app using node, express, and mysql.</p>
                        </div>
                        <a href="https://accountability-sus.herokuapp.com/">
                            <img class="card-img-bottom" src={accountability} style={{objectFit: "cover", height: "10vh"}} alt="Card image cap"></img>
                        </a>
                    </div>
                    <div className="card" style={{margin: "15px", backgroundColor: "#343432", height: "50vh", width: "30vh"}}>
                        <div className="card-body">
                            <h1 className="white oswaldb">moodify</h1>
                            <a className="lgray rmono" style={{fontSize: "10px"}} href="https://github.com/susehan27/project1-moodify">https://github.com/susehan27/project1-moodify</a>
                            <p className="white oswaldl">music for your moods.</p>
                        </div>
                        <a href="https://susehan27.github.io/project1-moodify/page1.html">
                            <img class="card-img-bottom" src={moodify} style={{objectFit: "cover", height: "10vh"}} alt="Card image cap"></img>
                        </a>
                    </div>
                    <div className="card" style={{margin: "15px", backgroundColor:"white", height: "50vh", width: "30vh"}}>
                        <div className="card-body">
                            <h1 className="gray oswaldb">newscrape</h1>
                            <a className="lgray rmono" style={{fontSize: "10px"}} href="https://github.com/susehan27/newscrape">https://github.com/susehan27/newscrape</a>
                            <p className="gray oswaldl">a news scraping app using mongoose.</p>
                        </div>
                        <a href="https://sus-newscrape.herokuapp.com/">
                            <img class="card-img-bottom" src={newscrape} style={{objectFit: "cover", height: "10vh"}} alt="Card image cap"></img>
                        </a>
                    </div>
                    <div className="card" style={{margin: "15px", backgroundColor: "white", height: "50vh", width: "30vh"}}>
                        <div className="card-body">
                            <h1 className="gray oswaldb">Crystals Collector</h1>
                            <a className="lgray rmono" style={{fontSize: "10px"}} href="https://github.com/susehan27/unit-4-game">https://github.com/susehan27/unit-4-game</a>
                            <p className="gray oswaldl">a number guessing game using javascript</p>
                        </div>
                        <a href="https://susehan27.github.io/unit-4-game/">
                            <img class="card-img-bottom" src={crystals} style={{objectFit: "cover", height: "10vh"}} alt="Card image cap"></img>
                        </a>
                    </div>
                    <div className="card" style={{margin: "15px", backgroundColor:"#343432", height: "50vh", width: "30vh"}}>
                        <div className="card-body">
                            <h2 className="white oswaldb">RPS: Multiplayer</h2>
                            <a className="lgray rmono" style={{fontSize: "10px"}} href="https://github.com/susehan27/RPS-Multiplayer">https://github.com/susehan27/RPS-Multiplayer</a>
                            <p className="white oswaldl">a real-time, two-player rock, paper, scissors game using firebase.</p>
                        </div>
                        <a href="https://susehan27.github.io/RPS-Multiplayer">
                            <img class="card-img-bottom" src={rps} style={{objectFit: "cover", height: "10vh"}} alt="Card image cap"></img>
                        </a>
                    </div>
                    <div className="card" style={{margin: "15px", backgroundColor: "white", height: "50vh", width: "30vh"}}>
                        <div className="card-body">
                            <h1 className="gray oswaldb">Guess The Emoji</h1>
                            <a className="lgray rmono" style={{fontSize: "10px"}} href="https://github.com/susehan27/Word-Guess-Game">https://github.com/susehan27/Word-Guess-Game</a>
                            <p className="gray oswaldl">a word guessing game using javascript.</p>
                        </div>
                        <a href="https://susehan27.github.io/Word-Guess-Game/">
                            <img class="card-img-bottom" src={guess} style={{objectFit: "cover", height: "10vh"}} alt="Card image cap"></img>
                        </a>
                    </div>
                    <div className="card" style={{margin: "15px", backgroundColor:"#343432", height: "50vh", width: "30vh"}}>
                        <div className="card-body">
                            <h1 className="white oswaldb">Giftastic</h1>
                            <a className="lgray rmono" style={{fontSize: "10px"}} href="https://github.com/susehan27/Giftastic">https://github.com/susehan27/Giftastic</a>
                            <p className="white oswaldl">a gif generating app using ajax.</p>
                        </div>
                        <a href="https://susehan27.github.io/Giftastic/">
                            <img class="card-img-bottom" src={gif} style={{objectFit: "cover", height: "10vh"}} alt="Card image cap"></img>
                        </a>
                    </div>
                    <div className="card" style={{margin: "15px", backgroundColor: "#343432", height: "50vh", width: "30vh"}}>
                        <div className="card-body">
                            <h1 className="white oswaldb">Friend Finder</h1>
                            <a className="lgray rmono" style={{fontSize: "10px"}} href="https://github.com/susehan27/FriendFinder">https://github.com/susehan27/FriendFinder</a>
                            <p className="white oswaldl">an "Office-themed" friend-matching app using node and express.</p>
                        </div>
                        <a href="https://friendfinder-matcher27.herokuapp.com/">
                            <img class="card-img-bottom" src="" style={{objectFit: "cover", height: "10vh"}} alt="Card image cap"></img>
                        </a>
                    </div>
                    <div className="card" style={{margin: "15px", backgroundColor:"white", height: "50vh", width: "30vh"}}>
                        <div className="card-body">
                            <h1 className="gray oswaldb">Burger Time</h1>
                            <a className="lgray rmono" style={{fontSize: "10px"}} href="https://github.com/susehan27/burger">https://github.com/susehan27/burger</a>
                            <p className="gray oswaldl">a burger app using node, express, mysql and handlebars.</p>
                        </div>
                        <a href="https://burgerapp27.herokuapp.com/">
                            <img class="card-img-bottom" src="" style={{objectFit: "cover", height: "10vh"}} alt="Card image cap"></img>
                        </a>
                    </div>

                </div>
            </div>
        )
    }
};

export default Projects;