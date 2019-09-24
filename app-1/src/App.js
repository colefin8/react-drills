import React, { Component } from "react";
import TextBox from './Components/TextBox'
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(){
    super();
    this.state = {
      userInput: ''
    }
  }

  handleChange = (value) =>{
      this.setState({userInput: value})
  }


  render() {
    return (
      <div className="App">
        <TextBox update={this.handleChange}/>
        <div>{this.state.userInput}</div>
      </div>
    );
  }
}

export default App;
