import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class NavBar extends Component{
    // state = {
    //     loggedIn: !!localStorage.getItem("user_id")
    // }

    numberOfItems=()=>{
        const {cart} = this.props
        let num = 0
        Object.values(cart).map(itemQty=>{
            num+=itemQty.quantity
        })
    return num
    }

    signOut = () => {
        localStorage.removeItem("user_id")
        this.props.signOut()
    }

render(){
    
    return(
    <div className="navbar">
    <NavLink to="/about" exact>About us</NavLink>
    <NavLink to="/" exact>Home</NavLink>
    {!this.props.loggedIn ? null : <NavLink to="/profile" exact>Profile</NavLink>}
    {!this.props.loggedIn ? null : <NavLink to="/cart" exact> Cart: {this.numberOfItems()} items</NavLink>}
    {this.props.loggedIn ?
    <NavLink to="/login" exact onClick={this.signOut}>Sign Out</NavLink> : 
    <NavLink to="/login" exact>Login</NavLink>}
    </div>
    )
}    
}