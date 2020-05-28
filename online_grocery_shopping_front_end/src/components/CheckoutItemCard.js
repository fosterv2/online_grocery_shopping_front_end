import React from 'react';

const CheckoutItemCard=(props)=>{
const {item, quantity} = props.itemQty
    
    
 return(
     
     <div className="checkOutItems">
    <div className="name">
    <strong>{item.name}</strong>
    </div>
       <div className="image">
    <img src={item.img_url} alt={item.name}/>
    </div>
     <div className="priceAndQty">   
        ${item.price} * {quantity}
        </div>
        <div className="total">
        $ {Math.round(item.price * quantity*100)/100}
   </div>
   </div>
 )
}
export default CheckoutItemCard