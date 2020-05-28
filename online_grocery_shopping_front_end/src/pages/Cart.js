import React, { Component } from 'react';
import { Link } from "react-router-dom";

import CartItemCard from '../components/CartItemCard'

export default class Cart extends Component{
    populateItems=()=>{
        // Object.values(this.props.cart) back to an array
      return  Object.values(this.props.cart).map((cartItem,index) => <CartItemCard key={index} cartItem={cartItem}
      deleteFromCart={this.props.deleteFromCart} updateCart={this.props.updateCart}/>)
    }
    calculateTotal=()=>{
        let total = 0
         Object.values(this.props.cart).map((cartItem) => total+=cartItem.item.price * cartItem.quantity)
         return Math.round(total*100)/100
    }
   
render(){
    
    return(
        
        // <Checkout data ={this.props} />
        
        <div>
            {this.populateItems()}
    <div>Total: {this.calculateTotal()}</div>
    <div>
    <Link to={"/checkout"}>
        <button>Check out</button>
        </Link>
    </div>
        </div>
    )
}    
}