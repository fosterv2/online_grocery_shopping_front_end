import React, { Component } from 'react';
import Checkout from './Checkout'


export default class Cart extends Component{

render(){
    return(
        
        <Checkout data ={this.props} />
        
    )
}    
}