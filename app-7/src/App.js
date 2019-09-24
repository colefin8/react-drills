import React, { Component } from "react";
import NewTask from './Components/NewTask'
import List from './Components/List'
import "./App.css";

class App extends Component {
  constructor(){
    super()
    this.state = {
      task: [],
    }
  }

  handleAddTask = (value) =>{

    this.setState({task: [...this.state.task, value]})
  }

  render = () =>{
    return (
      <div className="App">
        <h1>To-Do</h1>
        <NewTask add={this.handleAddTask}/> 
        {/* adds a task to the array "task" above */}
        <List tasks={this.state.task}/>
        {/* displays tasks in the array "task" above */}
      </div>
    );
  }
}

export default App;
