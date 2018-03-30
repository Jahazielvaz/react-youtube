import React from "react";
import "../../App.css"

import {Header} from "./Header.js";
import {Footer} from "./Footer.js";
import {BodyTop} from "./BodyTop.js"


export class Layout extends React.Component{
  constructor(props){
    super(props);
    this.state = {text: "text"}
  }


  render(){
    this.setState({text: "New Text"})
    const question3 = "What about you makes this world a better place?";
    const story = "I'm a wanderer, one who is thirsty for life!"
    const story2 = "Who cares when our time runs out, if a moment is all we are"
    return (
    <div className="page-container">
      <Header question1= {"Do you want to know who I am?"} story={story} />
      <Header question2={"Do you want to know what I really think?"} story2={story2} />
      {/* <Header question3={question3} answer={this.changeAnswer.bind(this)} /> */}

      <BodyTop {this.state.text}/>

      <Footer />
    </div>
    )
  }
}
