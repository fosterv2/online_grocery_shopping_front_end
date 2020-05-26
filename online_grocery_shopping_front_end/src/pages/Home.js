import React, { Component } from 'react';
import Filter from '../components/Filter'
import DisplayItems from '../components/DisplayItems'
import Search from '../components/Search'
import Sort from '../components/Sort'


export default class Home extends Component{
    state={
        showFilter:false
      }
     
    toggleFilter=()=>{
        this.setState({
         showFilter:!this.state.showFilter
         })
    }

render(){
    return(
        <div className = "home">
        <div className={this.state.showFilter?"change":"filterContainer"} onClick={this.toggleFilter}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
        </div>
            {this.state.showFilter? <Filter />:""}
              <h1> Hi, this is home!</h1>
        
        </div>
    )
}    
}