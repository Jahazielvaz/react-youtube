import React from "react";
import {Header} from "./Header.js";

export class BodyTop extends React.Component{
  render(){

    return(
      <div className = "bodytop">
        <input placeholder="Type here"/>
        <h3>{this.props.text}</h3>
      </div>

    )
  }
}
