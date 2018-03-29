import React from "react";

export class BodyTop extends React.Component{
  render(){
    return(
      <div className = "bodytop">
        <input placeholder="Type here"/>
        <h2>{this.props.text}</h2>
      </div>

    )
  }
}
