import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar.js'
import { BrowserRouter as Router, Route} from 'react-router-dom';
import AboutUs from './pages/AboutUs'
import Cart from './pages/Cart'
import UserProfile from './pages/UserProfile'
import Login from './pages/Login'
import Home from './pages/Home'
class App extends Component{
  render(){
    return(
      <Router>
          <NavBar/>
          <div className = "main">
          <Route exact path="/" component={Home}/>
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
