import React,{Component,useState} from "react";

 class Fresher extends Component{
state={
    greeting:"Hello welcome to my Reactjs World",
}
render(){
    return(
        <div>
            <h1>{this.state.greeting}</h1>
            <button onClick={()=>{this.setState({greeting:'Thanks for Visiting'})}}>Click Me</button>
        </div>
    )
}
}
export default Fresher;