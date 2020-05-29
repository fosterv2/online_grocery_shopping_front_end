import React, { Component } from 'react';

export default class PlacedOrder extends Component{
    render(){
        return(
        <h1>Thank you for shopping with us! We will start on prepare your order ASAP.
        Shipping takes estimated 2-3 days. You have ${this.props.wallet} left in your account.</h1>)
}
}

