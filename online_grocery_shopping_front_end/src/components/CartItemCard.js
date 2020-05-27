// import React, {Component} from 'react'
import React,{useState} from 'react'

const CartItemCard=({cartItem,updateCart,deleteFromCart})=>{

const {item,quantity} = cartItem

const [newQty, setNewQty] = useState(quantity)
const DecreaseItem=()=>{
    if(newQty>1){
    setNewQty(newQty-1)
    return updateCart(item, newQty)}
}
const IncrementItem=()=>{
    setNewQty(newQty+1)
    return updateCart(item, newQty)
}
const handleOnChange=(event)=>{
    event.preventDefault()
    setNewQty(parseInt(event.target.value))
     return updateCart(item, newQty)
}
const handleDelete=()=>{
   return deleteFromCart(item)
}
 return(
     <div className="CartItemCard">

         <div className="name">
         <strong>{item.name}</strong>
         </div>
            <div className="image">
         <img src={item.img_url}/>
         </div>
         <div className="price">
             $ {Math.round(item.price * quantity*100)/100}
        </div>
        <div className="changeQty">
            <button className="minus" onClick={DecreaseItem}>-</button>
                <input type="number" onChange={handleOnChange} min="1" name="quantity" value={newQty} className="input-text qty text" size="4"/>
            <button className="plus" onClick={IncrementItem}>+</button>
        </div>
    <div className="delete">
        <button onClick={handleDelete}>Delete</button>
        </div>
     </div>
 )
}

export default CartItemCard