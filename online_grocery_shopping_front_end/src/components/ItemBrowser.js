import React, { Component } from 'react';
import ItemCard from './ItemCard'

class ItemBrowser extends Component {
    renderItems = () => {
        const { items } = this.props
        return items.map(item => <ItemCard info={item} />)
    }

    render() {
        return <div className="items">{this.renderItems()}</div>
    }
}

export default ItemBrowser
