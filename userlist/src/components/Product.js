import React from "react";

const Product =(props)=>{
    return(
        <div>
            <h1>Name:{props.name}||price:{props.price}||Quantity:{props.qty}</h1>
        </div>
    )
}
export default Product;