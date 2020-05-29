import React, { Component } from 'react';

class Checkout extends Component{

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
}
export default Checkout