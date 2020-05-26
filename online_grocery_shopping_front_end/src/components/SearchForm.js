import React, {Component} from 'react'

class SearchForm extends Component{
    handleSearch= (event) =>{
        this.props.onSearch(event)
    }
    render(){
            return (
                <form>
                <input type="text" placeholder="Search.." name="search">
                <button type="submit" onClick = {this.handleSearch}>Search</i></button>
              </form>
            )
          }
}

export default SearchForm