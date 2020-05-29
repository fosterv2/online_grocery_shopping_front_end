import React from 'react';

const Filter=({categories,filterBy})=>{

    const handleClick=(event)=>{
        // debugger
        filterBy(event.target.innerText)
    }
   const populateCategory=()=>{
    return categories.map((category,index)=><p key={index} onClick={handleClick}>
        {category}</p>)
    }
    return(
        <div className="filterBar">
            <p onClick={handleClick}>All</p>
        {populateCategory()}
        </div>
    )
}

export default Filter