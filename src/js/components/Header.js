import React from "react";
import "../../App.css"

export class Header extends React.Component{
  constructor(){
    super();
    this.state = {
      name: 'Jahaziel',
    };
  }

  render(){
    setTimeout(() => {
      this.setState({name: 'Vicious!'})
    }, 3000)

    
    return (
      <header className = "header">
        <h1>My React App!</h1>
        <h2>Welcome {this.state.name}</h2>
        <h3>{this.props.question1}</h3>

        <h3>{this.props.question2}</h3>

        <h3>{this.props.question3}</h3>
        <h3>{this.props.story}</h3>
        <h3>{this.props.story2}</h3>
        <input />
      </header>
    )
  }
}
