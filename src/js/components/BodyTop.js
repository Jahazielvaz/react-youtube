import React from "react";

export class BodyTop extends React.Component{
  render(){
    this.props.changeText('hello');
    return(
      <div className = "bodytop">
        <input placeholder="Type here"/>
        <h2 text ={this.props.title}></h2>
      </div>

    )
  }
}
