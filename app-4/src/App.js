import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(){
    super()
    this.class = {
      name: '',
      password: ''
    }
  }

  handlePassChange = (value) =>{
    this.setState({password: value})
  }

  handleUserChange = (value) =>{
    this.setState({name: value})
  }

  submit = () =>{
    window.alert(`username: ${this.state.name}, password: ${this.state.password}`)
  }
  render() {
    return (
      <div className="App">
        <div>
          <input placeholder='username' onChange={(e)=>this.handleUserChange(e.target.value)}/>
          <br/>
          <input placeholder='password'onChange={(e)=>this.handlePassChange(e.target.value)}/>
          <br/>
          <button onClick={this.submit}>Submit</button>
        </div>
      </div>
    );
  }
}

export default App;
