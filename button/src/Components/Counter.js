import React,{Component} from "react";

class Counter extends Component{
state={
    count:0,
}
onIncrement=()=>{
    this.setState((prevState)=>({count:prevState.count+1}))
}
onDecrement=()=>{
    this.setState((prevState)=>({count:prevState.count-1}))
}
render(){
    const count=this.state
    return(
        <div className="counter">
            <h1 className="count">Count{count}</h1>
            <button className="button" onClick={this.onIncrement}>Increse</button>
            <button className="button" onClick={this.onDecrement}>Decrese</button>

        </div>
    )
}
}
export default Counter;