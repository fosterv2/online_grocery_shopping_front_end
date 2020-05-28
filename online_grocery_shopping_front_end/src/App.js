import React, { Component } from 'react';
import './App.css';
import './css/Form.css';
import './css/ItemCard.css'
import NavBar from './components/NavBar.js'
import { BrowserRouter as Router, Route} from 'react-router-dom';
import AboutUs from './pages/AboutUs'
import Cart from './pages/Cart'
import UserProfile from './pages/UserProfile'
import Login from './pages/Login'
import Home from './pages/Home'
import SingleItem from './pages/SingleItem'
import Signup from './pages/Signup';


const BASEURL = "http://localhost:3000"
const URL = "http://localhost:3000/items"

class App extends Component{
  state={
    items: [],
    itemShow: [],
    cart:{
      2:{item: {category: "Snacks", id: 2, img_url: "https://i.imgur.com/a1cLXfi.jpg", name: "Wheat Thins", price: 3.44}, quantity: 4},
    8: {item: {category: "Produce", id: 8, img_url:"https://i.imgur.com/LWHra2y.jpg", name: "Red Bell Pepper", price: 1.38}, quantity: 5},
    25: {item: {category: "Dairy", id: 25, img_url: "https://i.imgur.com/JdCvsTx.jpg", name: "Milk", price: 4.49}, quantity: 1}
    },
    currentUser: {},
    sortItem: []
    // items gathers all items, itemShow is what is getting displayed
  }

  handleSearch = (event) =>{
    let searchValue = event.target.value.toLowerCase()
    let values = this.state.items.filter(item => item.name.toLowerCase().includes(searchValue))
    console.log(values)
    this.setState({itemShow:values})
  }
  componentDidMount(){
    fetch(URL)
    .then(res => res.json())
    .then(data =>{
      this.setState({items: data, itemShow: data})})
    }
    //increment Qty
    handleSort =(event) =>{
      let newItems = [...this.state.items]
      let priceItems = [...this.state.items]
let arrayABC = newItems.sort((a, b) => (a.name > b.name) ? 1 : (a.name === b.name) ? ((a.size > b.size) ? 1 : -1) : -1 )
let arrayZYX = [...arrayABC].reverse()
let arrayLH = priceItems.sort((a, b) => (a.price > b.price) ? 1 : (a.price === b.price) ? ((a.size > b.size) ? 1 : -1) : -1 )
let arrayHL = [...arrayLH].reverse()
// if(event.target.value === 'AlphaABC'){
//   this.setState({itemShow: arrayABC})
//   console.log(arrayABC)

switch (event.target.value) {
  case "None":
  this.setState({itemShow: this.state.items})
  break;
  case "AlphaABC":
    this.setState({itemShow: arrayABC})
    break;
  case "AlphaZYX":
    this.setState({itemShow: arrayZYX})
    break;
  case "PriceHL":
    this.setState({itemShow: arrayHL})
    break;
  case "PriceLH":
    this.setState({itemShow: arrayLH})
    break;
    }
  }
  addToCart=(item,quantity)=>{

  //   fetch(`${BASEURL}/cart_items`,{
  //     method: "POST",
  //     headers: {
  //         "Content-Type": "application/json",
  //         Accept: "application/json"
  //     },
  //     body: JSON.stringify({
  //         user_id: 1,
  //         item_id: item.id,
  //         quantity:quantity
  //     })
  // })
  // .then(res => res.json())
  // .then(json =>  { this.setState(prev=>{
  //   return {cart:[...prev.cart,{item: item,quantity:quantity}]}
  //   })}
  //   )
    let itemAndQty={[item.id]:{item: item,quantity:quantity}}
    if(this.state.cart[item.id]){
      // modify the quantity
      this.setState(prev=>{
      let newCart =  prev.cart
      newCart[item.id].quantity += quantity
      return{
        cart: newCart
      }
      })
    }else{
      this.setState({
        cart:{
          ...this.state.cart,
          ...itemAndQty
        }
      })
    }
  }
  //replace old Qty with new Qty
  updateCart=(item,quantity)=>{
    this.setState(prev=>{
      let newCart =  prev.cart
      newCart[item.id].quantity = quantity
      return{
        cart: newCart
      }
      })
  }
  deleteFromCart=(item)=>{
    this.setState(prev=>{
      let newCart =  prev.cart
      delete newCart[item.id]
      return{
        cart: newCart
      }
      })
  }

  login = user => {
    this.setState({ currentUser: user })
    localStorage.setItem("user_id", user.id)
  }

  render(){
    return(
      <Router>
          <NavBar/>
          <div className = "main">
          <Route exact path="/" render={()=><Home itemShow={this.state.itemShow} onSearch ={this.handleSearch} onSort ={this.handleSort}/>}/>
          <Route exact path="/items/:id" render={(props)=><SingleItem {...props} items={this.state.items} addToCart={this.addToCart}/>}/>
          <Route exact path="/about" component={AboutUs}/>
          <Route exact path="/cart" render={()=><Cart cart={this.state.cart} updateCart={this.updateCart} deleteFromCart={this.deleteFromCart}/>}/>
          <Route exact path="/profile" component={UserProfile}/>
          <Route exact path="/signup" render={props => <Signup {...props} onLogin={this.login} />}/>
          <Route exact path="/login" render={props => <Login {...props} onLogin={this.login} />}/>
         </div>
      </Router>
    )
  }
}




export default App;

