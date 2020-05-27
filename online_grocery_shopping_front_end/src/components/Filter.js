import React, { Component } from 'react';

const Filter=({categories})=>{
   const populateCategory=()=>{
    return categories.map(category=><p>{category}</p>)
    }
    return(
        <div className="filterBar">
        {populateCategory()}
        </div>
    )
}

export default Filter