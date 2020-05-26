import React, { Component } from 'react';

const ItemCard = (props) => {
    const { info } = props
    return (
        <div className="ui column">
            <div
                className="ui card"
                key={info.id}
                onClick={() => console.log("clicked")}
            >
            <div className="image">
                <img alt="oh no!" src={info.img_url} />
            </div>
            <div className="content">
                <div className="header">
                    {info.name} {info.category}
                </div>

          {/* <div className="meta text-wrap">
            <small>{bot.catchphrase}</small>
          </div> */}
            </div>
        {/* <div className="extra content">
          <span>
            <i className="icon heartbeat" />
            {bot.health}
          </span>

          <span>
            <i className="icon lightning" />
            {bot.damage}
          </span>
          <span>
            <i className="icon shield" />
            {bot.armor}
          </span>
        </div> */}
      </div>
    </div>
    )
}

export default ItemCard
