import React, { Component } from 'react';



import CheckoutItemCard from '../components/CheckoutItemCard'

class Checkout extends Component{
  
    state={
        name: this.props.currentUser.username,
        address: this.props.currentUser.address,
        total:0,
        placedOrder:true
    }

    populateItems=()=>{


     return this.props.cart.map((itemQty,index)=><CheckoutItemCard key={index} itemQty={itemQty}/>    ) 

    }

    componentDidMount(){
        let total = 0
         this.props.cart.map((cartItem) => total+=cartItem.item.price * cartItem.quantity)
         this.setState({
             total:total.toFixed(2)

         })
         
    }

    handleSubmit = event => {
        event.preventDefault()
      
        //keep the 0 to be save!
        this.setState({
            placedOrder:false
        })

        let change = 0 - this.state.total
       return this.props.updateWallet(change)
    }
    
    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value})
    }
    

render(){
    
    return(
     <>
      {this.state.placedOrder?
        <>
      <div className="checkoutItems" >
        {this.populateItems()}
    <div className="total">
        <strong>Total: {this.state.total}</strong>
        </div>
        </div>
        <form className ="Checkout" onSubmit={this.handleSubmit}>
        <label for="name">Name</label><br/>
         <input type="text" id="name" name="name" value={this.state.name} onChange={this.handleChange}/><br/>

        <label for="address"> Address: </label><br/>
        <input id="address" type ="text" name ="address" value={this.state.address}   onChange={this.handleChange}/><br/>
        <p>Wallet: {Math.round(this.props.currentUser.wallet*100)/100}</p>
        <button className="addMoney">Add more money</button><br/>
        {/* <Link to={"/placedOrder"}> */}
        <input type="submit" value="Place Order" />
        {/* </Link> */}
        </form>
        </>
       :
       <h1>Thank you for shopping with us! We will start on prepare your order ASAP.
        Shipping takes estimated 2-3 days.</h1>}
      </>
    )
}    
}
export default Checkout





// render(){
    
//     return(
//      <>
//       {this.state.placedOrder?
//         <>
//       <div className="checkoutItems" >
//         {this.populateItems()}
//     <div className="total">
//         <strong>Total: {this.state.total}</strong>
//         </div>
//         </div>
//         <form className ="Checkout" onSubmit={this.handleSubmit}>

            
//         <label for="name"> Name: </label>
//         <input type ="text" id= "name" name="name" value={this.state.name} onChange={this.handleChange}/><br/>
//         <label> Address: </label>
//         <input type ="text" name ="address" value={this.state.address}   onChange={this.handleChange}/><br/>
//         <p>Wallet: {Math.round(this.props.currentUser.wallet*100)/100}</p>
//         <button className="addMoney">Add more money</button><br/>
//         {/* <Link to={"/placedOrder"}> */}
//         <input type="submit" value="Place Order" />
//         {/* </Link> */}
//         </form>
//         </>
//        :
//        <h1>Thank you for shopping with us! We will start on prepare your order ASAP.
//         Shipping takes estimated 2-3 days.</h1>}
//       </>
//     )
// }    
// }
// export default Checkout