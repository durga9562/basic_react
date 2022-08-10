import React, { Component } from "react";
import Product from "./Product";

class Products extends Component{
    state={
        products:[
            {name:"Mashrooms",price:"800",qty:"1KG"},
            {name:"Paneer",price:"1000",qty:"1kg"},
            {name:"Kaaju",price:"1200",qty:"1kg"},
        ],
        title:"Groceries List"
    }
    makeYoung=()=>{
      //  this.setState(prevState => {
        //    return {age: prevState.age + 5}
         //})
         const newstate=this.state.products.map((products)=>{
             const tempproduct=products;
             tempproduct.price -=5;
             return tempproduct;
         })
         this.setState({
             newstate
         });
    }
    
    render(){
        return(
            <div>
                <h1>{this.state.title}</h1>
            <Product name={this.state.products[0].name} price={this.state.products[0].price} qty={this.state.products[0].qty}/>
            <Product name={this.state.products[1].name} price={this.state.products[1].price} qty={this.state.products[1].qty}/>
            <Product name={this.state.products[2].name} price={this.state.products[2].price} qty={this.state.products[2].qty}/>
            
            <button className="btn btn-primary" onClick={this.makeYoung}>Make Younger</button>
            </div>
        )
    }
}
export default Products;