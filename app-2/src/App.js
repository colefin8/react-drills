import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(){
    super()
    this.state = {
      list: ['Cole', 'spaghetti', 'ice cream', 'sushi', 'bologna', 'cheese']
    }
  }
  
  render() {
    const tempArray = this.state.list;
    return (
      <div className="App">
        {tempArray.map((value) =>{
          return(
            <h2>{value}</h2>
          )
        })}
      </div>
    );
  }
}

export default App;
