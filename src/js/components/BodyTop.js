import React from "react";
import {Layout} from "./Layout";

export class BodyTop extends React.Component{
  render(){
    this.props.changeText()
    return(
      <div className = "bodytop">
        <input placeholder="Type here"/>
        <h2>{this.props.text}</h2>
      </div>

    )
  }
}
