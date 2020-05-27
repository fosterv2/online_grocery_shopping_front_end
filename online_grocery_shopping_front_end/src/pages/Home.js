import React, { Component } from 'react';
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

    // handleSearch = (event) =>{
    // let searchValue = event.target.search.value
    // let values = this.state.items.filter(item => item.name.includes(searchValue))
    // this.setState({itemShow:values})
    // }

    filterBy=(category)=>{

    }
    render(){
        const {items,categories} = this.props
        return(
            <div className = "home">
            <div className={this.state.showFilter?"change":"filterContainer"} onClick={this.toggleFilter}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </div>
                {this.state.showFilter? <Filter categories={categories} filterBy={this.filterBy}/>:""}
                {/* <SearchForm onSearch ={this.handleSearch}/> */}
                <ItemBrowser items={items} />
            </div>
        )
    }    
}