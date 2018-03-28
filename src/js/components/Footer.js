import React from "react";
import "../../App.css"

export class Footer extends React.Component{
  render(){
    return(
      <footer className = "footer">
        <ul>
          <a href= "#"><li>My Journey</li></a>
          <a href= "#"><li>Life Lessons</li></a>
          <a href= "#"><li>Challenges</li></a>
          <a href= "#"><li>Join Me!</li></a>
        </ul>
      </footer>
    )
  }
}
