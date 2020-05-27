import React, { Component } from 'react';

const ItemCard = (props) => {
    const { info } = props
    return (
        <div className="item card">
            <div
                className="item info"
                onClick={() => console.log("the event listener to see a single item")}
            >
                <div className="image">
                    <img alt={info.name} src={info.img_url} />
                </div>
                <div className="content">
                    <div className="header">
                        <strong>{info.name}</strong>
                    </div>
                    <div className="price">
                        Price: $<em>{info.price.toFixed(2)}</em>
                    </div>
                </div>
            </div>
            <div className="buy">
                <button onClick={() => console.log("the event listener to buy an item")}>Buy</button>
            </div>
        </div>
    )
}

export default ItemCard
