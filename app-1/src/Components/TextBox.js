import React, {Component} from 'react'

class TextBox extends Component{


    render(){
        return(
            <div>
                <input onChange={(e) => this.props.update(e.target.value)} type="text"/>
            </div>
        )
    }
}

export default TextBox