import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import Home from "./Home";
import Buy from "./Buy";
import Sell from "./Sell";
import About from "./About";
class Main extends Component {
  render() {
    return (
        <HashRouter>
            <div>
                <h1>Carvana</h1>
                <ul className="header">
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li><NavLink to="/Buy">Buy</NavLink></li>
                    <li><NavLink to="/Sell">Sell</NavLink></li>
                    <li><NavLink to="/About">About Us</NavLink></li>
                </ul>
                <div className="content">
                    <Route exact path="/" component={Home}/>
                    <Route path="/Buy" component={Buy}/>
                    <Route path="/Sell" component={Sell}/>
                    <Route path="/About" component={About}/>
                </div>
            </div>
        </HashRouter>
    );
  }
}
 
export default Main;