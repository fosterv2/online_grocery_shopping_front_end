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

const BASEURL = "http://localhost:3000"
const URL = "http://localhost:3000/items"

class App extends Component{
  state={
    items: [],
    itemShow: [],
    cart:{
    //   2:{item: {category: "Snacks", id: 2, img_url: "https://i.imgur.com/a1cLXfi.jpg", name: "Wheat Thins", price: 3.44}, quantity: 4},
    // 8: {item: {category: "Produce", id: 8, img_url:"https://i.imgur.com/LWHra2y.jpg", name: "Red Bell Pepper", price: 1.38}, quantity: 5},
    // 25: {item: {category: "Dairy", id: 25, img_url: "https://i.imgur.com/JdCvsTx.jpg", name: "Milk", price: 4.49}, quantity: 1}
    },
    loggedIn: !!localStorage.getItem("user_id"),
    categories:[],
    alphabetic: false,
    price: false,
    userId: localStorage.getItem("user_id")
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
  }

  fetchCartItems = () => {
    fetch(`${BASEURL}/cart_items/${localStorage.getItem("user_id")}`)
    .then(res=>res.json())
    .then(console.log)
  }

    //get user data and add to state, pass to checkout and user profile update 
  //   componentDidMount(){
  //     fetch(`BASEURL/users/${userId}`)
  //     .then(res=>res.json())
  //     .then(data=> data)
  // }
  
   
    //increment Qty
  addToCart=(item,quantity)=>{

   const find = Object.keys(this.state.cart).find(cartItem=>this.state.cart[cartItem].item.id===item.id)
    
    
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
    let itemAndQty={[cartItem.id]:{item: item,quantity:quantity}}
    this.setState({
      cart:{
        ...this.state.cart,
        ...itemAndQty
      }
    })
  }
    )
    }else{
      
      fetch(`${BASEURL}/cart_items/${find}`,{
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify({
            quantity:this.state.cart[find].quantity+quantity
        })
    })
    .then(res => res.json())
    .then(cartItem=>{

      this.setState(prev=>{
        let newCart =  prev.cart
        newCart[find].quantity += quantity
        return{
          cart: newCart
        }
        })
     })
    }
  }
  // replace old Qty with new Qty
  updateCart=(item,quantity)=>{
    const find = Object.keys(this.state.cart).find(cartItem=>this.state.cart[cartItem].item.id===item.id)

    fetch(`${BASEURL}/cart_items/${find}`,{
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
      newCart[find].quantity = quantity
      return{
        cart: newCart
      }
      })
  }
    
  )}
   
  deleteFromCart=(item)=>{
   //how to get the cartitemid? write fetch request to the backend, 
   //pass item_id and user_id to find cart_item_id then send back to front end?
   const find = Object.keys(this.state.cart).find(cartItem=>this.state.cart[cartItem].item.id===item.id)

   fetch(`${BASEURL}/cart_items/${find}`,{
     method: 'DELETE'
   })

    this.setState(prev=>{
      let newCart =  prev.cart
      delete newCart[find]
      return{
        cart: newCart
      }
      })
  }

  login = user => {
    localStorage.setItem("user_id", user.id)
    this.fetchCartItems()
    this.setState({ loggedIn: true })
  }

  signOut = () => this.setState({ loggedIn: false })

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
  render(){
    return(
      <Router>
          <NavBar cart={this.state.cart} loggedIn={this.state.loggedIn} signOut={this.signOut} />
          <div className = "main">
          <Route exact path="/"
              render={()=><Home
                itemShow={this.state.itemShow}
                onSearch ={this.handleSearch}
                filterBy={this.filterBy}
                categories={this.state.categories}
                loggedIn={this.state.loggedIn}
              />}
          />
          <Route exact path="/items/:id"
              render={props=><SingleItem
                {...props}
                items={this.state.items}
                addToCart={this.addToCart}
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
          <Route exact path="/profile" render={() => <UserProfile user={this.state.currentUser} />}/>
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
          <Route exact path="/checkout" render={(props)=><Checkout {...props} cart={this.state.cart} />}/>
         </div>
      </Router>
    )
  }
}




export default App;

