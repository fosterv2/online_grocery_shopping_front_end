import React, { Component } from 'react';
import CartItemCard from '../components/CartItemCard'

export default class Cart extends Component{
    populateItems=()=>{
        // Object.values(this.props.cart) back to an array
      return  Object.values(this.props.cart).map((cartItem,index) => <CartItemCard key={index} cartItem={cartItem}
      deleteFromCart={this.props.deleteFromCart} updateCart={this.props.updateCart}/>)
    }
render(){
    
    return(
        <div>
            {this.populateItems()}
        </div>
    )
}    
}