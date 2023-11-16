import React, { Component } from "react";
import logo from "./img/brainlogo.png";

export class MainHero extends Component {
  render() {
    return (
      <div className="hero">
        <h1 className="inline">MindApp</h1>
        <img className="inline-block p-4" src={logo} alt="Logo" />
      </div>
    );
  }
}
