import React, { Component } from "react";
import Header from "./Header";
import "./style.css";
import Body from "./Body";
export default class Ex_glass extends Component {
  render() {
    return (
      <div className="bg-img">
        <Header />
        <Body />
      </div>
    );
  }
}
