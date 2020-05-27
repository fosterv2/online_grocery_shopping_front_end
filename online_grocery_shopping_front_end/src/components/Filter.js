import React from 'react';

const Filter=({categories})=>{

    const handleClick=(event)=>{
        
    }
   const populateCategory=()=>{
    return categories.map(category=><p onClick={handleClick}>{category}</p>)
    }
    return(
        <div className="filterBar">
        {populateCategory()}
        </div>
    )
}

export default Filter