import React, { Component } from "react";
import ToDo from './ToDo';

class List extends Component{
    render = () =>{
        let arr = this.props.tasks.map((element, index)=>{ 
            return <ToDo key={index} task={element}/>
        })
        return(
            <div>{arr}</div>
        )    
    }
}

export default List