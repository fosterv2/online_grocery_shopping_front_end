import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';



export default class NavBar extends Component{

   
    numberOfItems=()=>{
        const {cart} = this.props
        let num = 0
        Object.values(cart).map(itemQty=>{
            num+=itemQty.quantity
        })
    return num
    }
render(){
    
    return(
    <div className="navbar">
        
    <NavLink to="/about" exact>About us</NavLink>
    <NavLink to="/" exact>Home</NavLink>
    <NavLink to="/profile" exact>Profile</NavLink>
    <NavLink to="/login" exact>Login</NavLink>
    <NavLink to="/cart" exact> Cart: {this.numberOfItems()} items</NavLink>
    </div>
    )
}    
}


// export default class NavBar extends Component{
//     numberOfItems=()=>{
//         const {cart} = this.props
//         let num = 0
//         Object.values(cart).map(itemQty=>{
//             num+=itemQty.quantity
//         })
//     return num
//     }
// render(){
    
//     return(
//     <div className="navbar">
//     <NavLink to="/about" exact>About us</NavLink>
//     <NavLink to="/" exact>Home</NavLink>
//     <NavLink to="/profile" exact>Profile</NavLink>
//     <NavLink to="/login" exact>Login</NavLink>
//     <NavLink to="/cart" exact> Cart: {this.numberOfItems()} items</NavLink>
//     </div>
//     )
// }    
// }