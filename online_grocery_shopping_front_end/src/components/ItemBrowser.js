import React, { Component } from 'react';
import ItemCard from './ItemCard'

class ItemBrowser extends Component {
    renderItems = () => {
        const { items,addToCart } = this.props
        return items.map(item => <ItemCard key={item.id} info={item} addToCart={addToCart}/>)
    }

    render() {
        return <div className="items">{this.renderItems()}</div>
    }
}

export default ItemBrowser
