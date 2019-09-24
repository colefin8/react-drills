import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import axios from "axios"

class App extends Component {
  constructor(){
    super();

    this.state = {
      blastoise: ''
    }
  }

  componentDidMount() {
    axios.get('https://pokeapi.co/api/v2/pokemon/9').then(res => {
      console.log(res)
      this.setState({
        blastoise: res.data
      })
    })
  }

  render() {
    let blastoise = (index) => this.state.blastoise.abilities ? this.state.blastoise.abilities[index].ability.name : 'loading'
    console.log(blastoise)
    return (
      <div className="App">
        <div>
          <h3>{blastoise(0)}</h3>
          <h3>{blastoise(1)}</h3>
        </div>
      </div>
    );
  }
}

export default App;
