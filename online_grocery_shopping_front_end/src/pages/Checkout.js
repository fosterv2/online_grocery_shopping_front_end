import React, { Component } from 'react';
import CheckoutItemCard from '../components/CheckoutItemCard'

class Checkout extends Component{

  
    populateItems=()=>{
        
     return this.props.cart.map((itemQty,index)=><CheckoutItemCard key={index} itemQty={itemQty}/>    )  
    }

render(){
    return(
      <>
      <div className="checkoutItems">
        {this.populateItems()}
        </div>
        <form className ="Checkout" >
        <label> Name </label>
        <input type ="text" name="name" />
        <label> Address </label>
        <input type ="text" name ="address" />
        <input type="submit" value="Submit" />
        </form>
       </>
    )
}    
}
export default Checkout