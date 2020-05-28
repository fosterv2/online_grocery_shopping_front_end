import React, { Component, Fragment } from 'react';
import Filter from '../components/Filter'
import Sort from '../components/Sort'
import SearchForm from '../components/SearchForm.js'
import SingleItem from './SingleItem.js'
import ItemBrowser from '../components/ItemBrowser';

export default class Home extends Component{
    state={
        showFilter:false,
      }
     
    toggleFilter=()=>{
        this.setState({
         showFilter:!this.state.showFilter
         })
    }
      
      handleCheckbox =(event) =>{
        
        // let property = event.target.name
        
        // this.setState({property: !this.state.property })

        // if(this.state.property){
        //   this.state.property
        // }
      }

    filterBy=(category)=>{

    }

render(){
    const {items,categories} = this.props
    return(
      <Fragment>
        <Sort onSort ={this.handleCheckbox} data={this.state}/>
        <div className = "home">
        <div className={this.state.showFilter?"change":"filterContainer"} onClick={this.toggleFilter}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
        </div>
        {this.state.showFilter? <Filter categories={categories} filterBy={this.filterBy}/>:""}
              <SearchForm onSearch ={this.props.onSearch}/>
              <ItemBrowser items={itemShow} /> 
              {/* changeditem to itemShow */}
              
        </div>
        
        </Fragment>
    )
}
}    
