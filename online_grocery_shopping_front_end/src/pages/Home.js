import React, { Component, Fragment } from 'react';
import Filter from '../components/Filter'
import DisplayItems from '../components/DisplayItems'
import Sort from '../components/Sort'
import SearchForm from '../components/SearchForm.js'
import ItemBrowser from '../components/ItemBrowser';

const URL = "http://localhost:3000/items"

export default class Home extends Component{
    state={
        showFilter:false,
        items: [],
        itemShow: [],
        alphabetic: false,
        price: false
        // items gathers all items, itemShow is what is getting displayed
      }
     
    toggleFilter=()=>{
        this.setState({
         showFilter:!this.state.showFilter
         })
    }

      componentDidMount(){
      fetch(URL)
      .then(res => res.json())
      .then(data =>{
        this.setState({items: data, itemShow: data})})
      }

      handleSearch = (event) =>{
        let searchValue = event.target.value.toLowerCase()
        let values = this.state.items.filter(item => item.name.toLowerCase().includes(searchValue))
        console.log(values)
        this.setState({itemShow:values})
      }
      
      // handleCheckbox =(event) =>{
      //   // let alphabet = event.target.alphabet.value
      //   // let price = event.target.alphabet.value
        
      //   let property = event.target.name
        
      //   this.setState({property: !this.state.property })

      //   if(this.state.property){
      //     this.state.property
      //   }
      // }

render(){
    return(
      <Fragment>
        <Sort onSort ={this.handleCheckbox} data={this.state}/>
        <div className = "home">
        <div className={this.state.showFilter?"change":"filterContainer"} onClick={this.toggleFilter}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
        </div>
            {this.state.showFilter? <Filter />:""}
              <h1> Hi, this is home!</h1>
              <SearchForm onSearch ={this.handleSearch}/>
              <ItemBrowser items={this.state.itemShow} /> 
              {/* changeditem to itemShow */}
              
        </div>
        
        </Fragment>
    )
}    
}