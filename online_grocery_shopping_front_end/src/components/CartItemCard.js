// import React, {Component} from 'react'
import React,{useState,useEffect} from 'react'

const CartItemCard=({cartItem,updateCart,deleteFromCart})=>{

const {item,quantity} = cartItem

const [newQty, setNewQty] = useState(quantity)
const DecreaseItem=()=>{
    if(newQty>1){
    setNewQty(newQty-1)
   }
}
const IncrementItem=()=>{
    setNewQty(newQty+1)
   
}
const handleOnChange=(event)=>{
    event.preventDefault()
    setNewQty(parseInt(event.target.value))
     
}
// when newQty changed updateCart(item, newQty) will be triggered
//tie behavior to a value
// allow the data to updated in time
useEffect(()=>{
 updateCart(item, newQty)
}, [newQty])

const handleDelete=()=>{
   return deleteFromCart(item)
}
 return(
     <div className="CartItemCard">

         <div className="name">
         <strong>{item.name}</strong>
         </div>
            <div className="image">
         <img src={item.img_url} alt={item.name}/>
         </div>
         <div className="price">
             $ {Math.round(item.price * quantity*100)/100}
        </div>
        <div className="changeQty">
            <button className="minus" onClick={DecreaseItem}>-</button>
                <input type="number" onChange={handleOnChange} min="1" name="quantity" value={quantity} className="input-text qty text" size="4"/>
            <button className="plus" onClick={IncrementItem}>+</button>
        </div>
    <div className="delete">
        <button onClick={handleDelete}>Delete</button>
        </div>
     </div>
 )
}

export default CartItemCard