import React from 'react'


const SearchForm = props =>{
   let handleSearch= (event) =>{
        props.onSearch(event)
    }
    return( 
    <input className ="Search" placeholder="Item Search…" onChange={handleSearch} />
    )
}

export default SearchForm