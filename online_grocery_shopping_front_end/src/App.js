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
import Checkout from './pages/Checkout'
// import PlacedOrder from './pages/PlacedOrder'
const BASEURL = "http://localhost:3000"
const URL = "http://localhost:3000/items"

class App extends Component{
  state={
    items: [],
    itemShow: [],
    cart:[],
    loggedIn: !!localStorage.getItem("user_id"),
    categories:[],
    alphabetic: false,
    price: false,
    userId: localStorage.getItem("user_id"),
    currentUser: {
      username: "",
      color: "",
      address: "",
      wallet: "",
      email: "",
      password: ""
  }
    // items gathers all items, itemShow is what is getting displayed
  }

  componentDidMount(){
    fetch(URL)
    .then(res => res.json())
    .then(data =>{
      // let ca = 
      this.setState({
        items: data,
        itemShow: data,
        //get unique category
        categories:data.map(item=>item.category).filter((value,index,self)=>{return self.indexOf(value) ===index})
      })
    }
    )
    if(this.state.loggedIn) {
      this.fetchCartItems()
    }

  
    fetch(`${BASEURL}/users/${this.state.userId}`)
    .then(resp => resp.json())
    .then(user => {
      this.setState({ currentUser: user})
    })
  
  }

  fetchCartItems = () => {
    fetch(`${BASEURL}/cart_items/${this.state.userId}`)
    .then(res=>res.json())
    .then(data=>{
      this.setState({
        cart: data
      })
    })
  }

    //get user data and add to state, pass to checkout and user profile update 
  //   componentDidMount(){
  //     fetch(`BASEURL/users/${userId}`)
  //     .then(res=>res.json())
  //     .then(data=> data)
  // }
  
   
    //increment Qty
  addToCart=(item,quantity=1)=>{

  //  const find = Object.keys(this.state.cart).find(cartItem=>this.state.cart[cartItem].item.id===item.id)
  let ind = 0  
  const find= this.state.cart.find((cartItem,index)=>{
      ind = index
      return cartItem.item.id===item.id
    
    })
    
    if(!find){
   fetch(`${BASEURL}/cart_items`,{
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
      },
      body: JSON.stringify({
          user_id: this.state.userId,
          item_id: item.id,
          quantity:quantity
      })
  })
  .then(res => res.json())
  .then(cartItem =>  {

// console.log(cartItem.id)
    let itemAndQty={id: cartItem.id ,item: item,quantity:quantity}
    this.setState({
      cart:
        [...this.state.cart,
        itemAndQty
        ]
    })
  }
    )
    }else{
      
      fetch(`${BASEURL}/cart_items/${find.id}`,{
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify({
            quantity:find.quantity+quantity
        })
    })
    .then(res => res.json())
    .then(cartItem=>{
      this.setState(prev=>{
        let newCart =  prev.cart
        newCart[ind].quantity += quantity
        return{
          cart: newCart
        }
        })
     })
    }
  }
  // replace old Qty with new Qty
  updateCart=(item,quantity)=>{
    let ind = 0  
    const find= this.state.cart.find((cartItem,index)=>{
        ind = index
        return cartItem.item.id===item.id
      
      })
    fetch(`${BASEURL}/cart_items/${find.id}`,{
      method: "PATCH",
      headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
      },
      body: JSON.stringify({
          quantity:quantity
      })
  })
  .then(res => res.json())
  .then(cartItem=>{
    this.setState(prev=>{
      let newCart =  prev.cart
      newCart[ind].quantity = quantity
      return{
        cart: newCart
      }
      })
  }
    
  )}
   
  deleteFromCart=(item)=>{
    let ind = 0  
      const find= this.state.cart.find((cartItem,index)=>{
      ind = index
      return cartItem.item.id===item.id
    
    })
  //  const find = Object.keys(this.state.cart).find(cartItem=>this.state.cart[cartItem].item.id===item.id)

   fetch(`${BASEURL}/cart_items/${find.id}`,{
     method: 'DELETE'
   })

    this.setState(prev=>{
      let newCart =  prev.cart
      return{
        cart: [...newCart.slice(0,ind),...newCart.slice(ind+1)]
      }
      })
  }

  login = user => {
    localStorage.setItem("user_id", user.id)
    this.setState({
      loggedIn: true,
      userId: localStorage.getItem("user_id")
    })
    this.fetchCartItems()
  }

  signOut = () => {
    this.setState({
      loggedIn: false,
      cart: []
    })
  }

  handleSearch = (event) =>{
    let searchValue = event.target.value.toLowerCase()
    let values = this.state.items.filter(item => item.name.toLowerCase().includes(searchValue))
    // console.log(values)
    this.setState({itemShow:values})
  }
  filterBy=(category)=>{
    let values=[]
    if(category!=="All"){
     values = this.state.items.filter(item => item.category===category)}
    else{
     values = this.state.items
    }
  
    this.setState({itemShow:values})

  }

  updateWallet=(change)=>{
    
    fetch(`${BASEURL}/users/${this.state.userId}`, {
      method: "PATCH",
      headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
      },
      body: JSON.stringify({wallet:this.state.currentUser.wallet+change})
  })
  .then(resp => resp.json())
  .then(user => {
    let newBalance = {...this.state.currentUser}
    newBalance.wallet += change
    this.setState({
      newBalance
    })
  })
  
  fetch(`${BASEURL}/cart_items/destroy_all/${this.state.userId}`,{
    method: 'DELETE'
  })
    this.setState({
        cart:[]
      })
   
  }

  userUpdate=(newUserInfo)=>{
    fetch(`${BASEURL}/users/${this.state.userId}`, {
      method: "PATCH",
      headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
      },
      body: JSON.stringify(newUserInfo)
  })
  .then(resp => resp.json())
  .then(user => {
    this.setState({
      currentUser:user
    })
  })
  .catch()
  }
  render(){
    return(
      <Router>
          <NavBar cart={this.state.cart} loggedIn={this.state.loggedIn} signOut={this.signOut} />
          <div className = "main">
          <Route exact path="/"
              render={() => <Home
                itemShow={this.state.itemShow}
                onSearch ={this.handleSearch}
                addToCart={this.addToCart}
                filterBy={this.filterBy}
                categories={this.state.categories}
                loggedIn={this.state.loggedIn}
              />}
          />
          <Route exact path="/items/:id"
              render={props => <SingleItem
                {...props}
                items={this.state.items}
                addToCart={this.addToCart}
                loggedIn={this.state.loggedIn}
              />}
          />
          <Route exact path="/about" component={AboutUs}/>
          <Route exact path="/cart"
              render={()=><Cart
                cart={this.state.cart}
                updateCart={this.updateCart}
                deleteFromCart={this.deleteFromCart}
              />}
          />
          <Route exact path="/profile" render={() => <UserProfile currentUser={this.state.currentUser} userUpdate={this.userUpdate} />}/>
          <Route exact path="/signup"
              render={props => <Signup
                {...props}
                onLogin={this.login}
                loggedIn={this.state.loggedIn}
              />}
          />
          <Route exact path="/login"
              render={props => <Login
                {...props}
                onLogin={this.login}
                loggedIn={this.state.loggedIn}
              />}
          />
          <Route exact path="/checkout" render={(props)=><Checkout {...props} cart={this.state.cart} currentUser={this.state.currentUser} updateWallet={this.updateWallet}/>}/>
          {/* <Route exact path="/placedOrder" component={<PlacedOrder/>}/> */}
         </div>
      </Router>
    )
  }
}

export default App;
