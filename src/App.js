import React, { Component } from 'react';
import "./App.css";
import Dashboard from "./component/Deshboard";
import Login from "./component/login";
import signup from "./component/signnup";
import aboutus from "./component/aboutus";
import contact from "./component/contact";
import card from "./component/card";
import { BrowserRouter as Router, Route} from "react-router-dom";


export default class App extends Component {
  render() {
    return (
      <Router>
      <div>
      <Route path="/" exact component={Dashboard} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={signup}/>
      <Route path="/aboutus" component={aboutus}/>
      <Route path="/contact" component={contact}/>
      <Route path="/card" component={card}/>
      </div>
      </Router>
    )
  }
}



