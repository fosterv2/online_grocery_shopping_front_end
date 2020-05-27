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
import Signup from './pages/Signup';

class App extends Component{
  state = {
    currentUser: {}
  }

  login = user => {
    console.log(user)
    this.setState({ currentUser: user })
    localStorage.setItem("user_id", user.id)
  }

  render(){
    return(
      <Router>
          <NavBar/>
          <div className = "main">
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={AboutUs}/>
          <Route exact path="/cart" component={Cart}/>
          <Route exact path="/profile" component={UserProfile}/>
          <Route exact path="/signup" render={props => <Signup {...props} onLogin={this.login} />}/>
          <Route exact path="/login" render={props => <Login {...props} onLogin={this.login} />}/>
         </div>
      </Router>
    )
  }
}




export default App;
