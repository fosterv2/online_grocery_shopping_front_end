import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar.js'
import { BrowserRouter as Router, Route} from 'react-router-dom';
import AboutUs from './pages/AboutUs'
import Cart from './pages/Cart'
import UserProfile from './pages/UserProfile'
import Login from './pages/Login'
import Home from './pages/Home'
import SingleItem from './pages/SingleItem'

const URL = "http://localhost:3000/items"

class App extends Component{
  state={
    items: [],
    itemShow: []
  }

  componentDidMount(){
    fetch(URL)
    .then(res => res.json())
    .then(data =>{
      this.setState({items: data})})

    }
  render(){
    return(
      <Router>
          <NavBar/>
          <div className = "main">
          <Route exact path="/" render={()=><Home items={this.state.items}/>}/>
          <Route exact path="/items/:id" render={()=><SingleItem/>}/>
          <Route exact path="/about" component={AboutUs}/>
          <Route exact path="/cart" component={Cart}/>
          <Route exact path="/profile" component={UserProfile}/>
          <Route exact path="/login" component={Login}/>
         </div>
      </Router>
    )
  }
}




export default App;
