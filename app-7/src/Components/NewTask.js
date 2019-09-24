import React, { Component } from "react";

class NewTask extends Component {
    constructor(){
        super();
        this.state = {
            userInput: ''
        }
    }

    handleInput = (e) =>{
        this.setState({userInput: e})
    }

    handleSubmit = () =>{
        this.props.add(this.state.userInput)
        this.setState({userInput: ''})
    }

    render = () =>{
        return(
            <div>
                <input onChange={(e) => this.handleInput(e.target.value)}/>
                <button onClick={()=> this.handleSubmit()}>Add</button>
            </div>
        )
    }
}

export default NewTask