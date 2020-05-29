import React from 'react'

const Sort = props =>{
    const handleCheck= (event) =>{
        props.onSort(event)    
    }
    const handleSort = (event) =>{
      props.onSort(event)
    }
    return (
    <form className ="Sort">
    <label htmlFor="sorts">Choose a sort: </label>
    <select onClick ={ handleSort}>
    <option value="None">None</option>
    <option value="AlphaABC">Alphabetic: ABC</option>
    <option value="AlphaZYX">Alphabetic: ZYX</option>
    <option value="PriceHL">Price: High to Low</option>
    <option value="PriceLH">Price: Low to High</option>
    </select >
    </form>
    )
}

export default Sort