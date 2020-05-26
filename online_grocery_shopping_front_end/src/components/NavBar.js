import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';

export default class NavBar extends Component{

render(){
    return(
    <div className="navbar">
 
    <NavLink to="/about" exact>About us</NavLink>
    <NavLink to="/" exact>Home</NavLink>
    <NavLink to="/profile" exact>Profile</NavLink>
    <NavLink to="/login" exact>Login</NavLink>
    <NavLink to="/cart" exact>Cart</NavLink>

    </div>
    )
}    
}