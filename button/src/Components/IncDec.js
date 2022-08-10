import React,{Component,useState} from "react";

export default class IncDec extends Component{
    constructor(){
        
        this.state={
count:0,
        }
        
    }
    render(){
        return(
            <div>
                <h1>Count:{this.state.count}</h1>
                <button onClick={()=>{this.setState({count:this.state.count+1})}}>Increment</button>
                <button onClick={()=>{this.setState({count:this.state.count-1})}}>Decrement</button>
            </div>
        )
    }
}