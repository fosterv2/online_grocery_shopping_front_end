import React, { Component, Fragment } from 'react';
import Filter from '../components/Filter'
import SearchForm from '../components/SearchForm.js'
import ItemBrowser from '../components/ItemBrowser';
import Sort from '../components/Sort'

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

render(){
  const {itemShow,categories,filterBy,addToCart,loggedIn} = this.props
    return(
      <Fragment>
        <Sort onSort ={this.props.onSort} data={this.state}/>
        <div className = "home">
        <div className={this.state.showFilter?"change":"filterContainer"} onClick={this.toggleFilter}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
        </div>
        {this.state.showFilter? <Filter categories={categories} filterBy={filterBy}/>:""}
              <SearchForm onSearch ={this.props.onSearch}/>
              <ItemBrowser items={itemShow} addToCart={addToCart} loggedIn={loggedIn} /> 
              {/* changeditem to itemShow */}
              
        </div>
        
        </Fragment>
    )
}

}