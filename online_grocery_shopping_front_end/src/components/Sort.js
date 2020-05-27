import React, {Component} from 'react'

const Sort = props =>{
    const handleCheck= (event) =>{
        props.onSort(event)
    
    }
    return(
        <div className ="Sort">Sort
        <input className ="checkbox" type="checkbox" name ="alphabetic" value={props.data.alphabetic} onClick ={handleCheck}/>
        <input className ="checkbox" type="checkbox" name = "price" value ={props.data.price} onClick ={handleCheck} />
        </div>
    )
}

export default Sort