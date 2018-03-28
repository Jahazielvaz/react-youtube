import React from "react";
import "../../App.css"

import {Header} from "./Header.js";
import {Footer} from "./Footer.js";

export class Layout extends React.Component{
  render(){
    const story = "I'm a wanderer, one who is thirsty for life!"
    const story2 = "Who cares when your boss is mad, if a moment is all we are"
    return (
    <div className="page-container">
      <Header story={story} />
      <Header story2={story2} />

      <Footer />
    </div>
    )
  }
}
