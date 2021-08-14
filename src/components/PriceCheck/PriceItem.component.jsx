import React, { PureComponent } from 'react'

export default class PriceItem extends PureComponent {
    render() {
        const { ingameName, userStatus, itemPrice, orderType, quantity, rank } = this.props;
        return (
            <div className="PriceItem">
                <p className="PriceItem__price"><span className="PriceItem__label">Price:</span> {itemPrice} Platinum</p>
                <p className="PriceItem__quantity"><span className="PriceItem__label">Rank:</span> {rank || "NA"}</p>
                <p className="PriceItem__quantity"><span className="PriceItem__label">Quantity:</span> {quantity}</p>
                <p className="PriceItem"><span className="PriceItem__label">User IGN:</span> {ingameName}</p>
                <p className="PriceItem"><span className="PriceItem__label">Order Type:</span> {orderType}</p>
                <p className="PriceItem"><span className="PriceItem__label">User Status:</span> {userStatus}</p>
            </div>
        )
    }
}
