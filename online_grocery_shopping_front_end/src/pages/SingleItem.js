import React, { Component } from "react";


export default class SingleItem extends Component{
    state={
        quantity:1
    }

    getItem=()=>{
        const id= this.props.match.params.id
        let foundItem = {img_url:"",name:"", price:"",category:"",description:""}
        for(let item of this.props.items){
            if(item.id == id){
                foundItem=item
            }
        }
        return foundItem
    }

    IncrementItem = () => {
        this.setState({ quantity: this.state.quantity + 1 })
      }

    DecreaseItem = () => {
        if(this.state.quantity>1){
             this.setState({ quantity: this.state.quantity - 1 })
        }
    }
    handleOnChange=(event)=>{
        event.preventDefault()
        this.setState({
            quantity:parseInt(event.target.value)
        })
    }
    handleAddToCart=()=>{
        // let itemAndQ ={
        //     item:this.getItem(),
        //     quantity: this.state.quantity
        // }
        this.props.addToCart(this.getItem(),this.state.quantity)

    }
    render(){
        const {img_url,name, price,category,description} = this.getItem()

        return(
            <div className = "SingleItemDisplay">
                <img src={img_url}/>
                <h1>{name}</h1>
                <h3>{category}</h3>
                <h3>{price}</h3>
                <p>{description}</p>
                
                <button className="minus" onClick={this.DecreaseItem}>-</button>
                <input type="number" onChange={this.handleOnChange} min="1" name="quantity" value={this.state.quantity} className="input-text qty text" size="4"/>
                <button className="plus" onClick={this.IncrementItem}>+</button>
                <button onClick={this.handleAddToCart}>Add to cart</button>

            </div>
        )
    }
}

