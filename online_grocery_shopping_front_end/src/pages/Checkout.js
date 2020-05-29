import React, { Component } from 'react';
import CheckoutItemCard from '../components/CheckoutItemCard'

class Checkout extends Component{
  
    state={
        name: this.props.currentUser.username,
        address: this.props.currentUser.address,
        wallet: this.props.currentUser.wallet,
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

        let change = this.state.wallet - this.state.total
       return this.props.updateWallet(change)
    }
    
    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value})
    }

    handleWallet = (event) =>{
        event.preventDefault()
    if(this.props.currentUser.wallet- this.state.total<0){
      let newValue = event.target.value
      console.log(newValue)
      this.setState({wallet:newValue})
    }
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
        Add Money: <input type="text" onChange ={this.handleWallet} ></input>
        {/* <button className="addMoney" onClick ={this.handleWallet}>Add more money</button><br/> */}
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
//     state ={
//         name: "",
//         address: "",
//         total: 5,
//         wallet: 3,
//         on: true
//     }
//     handleSubmit = (event) =>{
//         this.setState({name: event.target.name.value, address: event.target.address.value})
//         this.toggle()
//     }

//     toggle = () =>{
//         this.setState({on: !this.state.on})
//     }
//     // componentDidMount(){
//     //     fetch("http://localhost:3000")
//     //     .then(res =>res.json())
//     //     //match to user id for wallet
//     //     .then(walletdata.wallet =>{
//     //         this.setState({wallet : walletdata.wallet})
//     //     })
//     // }
  
// render(){
//     return(
//         <>
//         {this.state.on?
//         <form className ="Checkout" onSubmit={this.handleSubmit}>
//         <label> Name </label>
//         <input type ="text" name="name"/>
//         <label> Address </label>
//         <input type ="text" name ="address"/>
//         <input className ="checkout" type="submit" value="Checkout" />
//         </form>
//         :
//         <h1>Thank for shopping with us {this.state.name}! Your purchase was processed and these items will get shipped to the address: {this.state.address}</h1>
//         }
//         {(this.state.total>this.state.wallet)? 
//             // 
//             <form>
//             <label>Wallet</label>
//             <input type="text"/>
//             <input className ="checkout" type="submit" value="Add Money" />
//             <h1>Your total balance exceeds your wallet amount. Please add more cash into your wallet</h1>
//             </form>
//             : 
//             <h1>You have sufficient funds to purchase</h1>
//         }
//         </>
//     )
// }    
export default Checkout
