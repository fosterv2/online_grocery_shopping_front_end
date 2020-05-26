import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchForm from '../components/SearchForm.js'

class App extends Component{
state = {
  items :[],
  itemShow :[]
}

// const URL = 'localhost/items'
componentDidMount(){
fetch(URL)
.then(res => res.json)
.then(data =>{
  this.setState({items: data})})
}

handleSearch = (event) =>{
  let searchValue = event.target.search.value
  let values = this.state.items.filter(item => item.name.includes('searchValue'))
  this.setState({itemShow:values})
}

render() {
  return (<SearchForm onSearch ={this.handleSearch}/>)
}
}
export default App;
