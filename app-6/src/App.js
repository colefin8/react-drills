import React, { Component } from "react";
import ToDo from "./Components/ToDo"
import "./App.css";

class App extends Component {
  constructor(){
    super()
    this.state = {
      userInput: '',
      toDoList: []
    }
  }

  handleInput = (e) =>{
    this.setState({userInput: e})
  }

  handleSubmit = () => {
    let tempArr = this.state.toDoList
    tempArr.push(this.state.userInput)
    this.setState({toDoList: tempArr})
  }

  handleRemove = (index) =>{
    let newArray = this.state.toDoList
    newArray.splice(index, 1)
    this.setState({toDoList: newArray})
  }
  
  render() {
    let list = this.state.toDoList.map((element, index)=>{
      return (<div key={index} className="item">
        <ToDo task={element}/>
        <button onClick={()=> this.handleRemove(index)}>Remove</button>
        </div>
      )
    })
    return (
      <div className="App">
        <div>
          <input onChange={(e)=> this.handleInput(e.target.value)}/>
          <button onClick={()=>this.handleSubmit()}>Add</button>
        </div>
        {list}
      </div>
    );
  }
}

export default App;
