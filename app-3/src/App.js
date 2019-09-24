import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(){
    super()
    this.state = {
      list:['cole', 'banana', 'coding', 'potato', 'cheese', 'sushi', 'ice cream'],
      userInput: ""
    }
  }

  updateText = (value) =>{
    this.setState({
      userInput: value
    })
  } 
  
  render() {
    const tempArray = this.state.list;
    return (
      <div className="App">
        <input onChange={(e) => this.updateText(e.target.value)}/>
        {tempArray.map((element) => {
          if(element.includes(this.state.userInput)){
          return (<h2>{element}</h2>)
          }
        })}
      </div>
    );
  }
}

export default App;
