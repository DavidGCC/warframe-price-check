import React, { PureComponent } from 'react'

export default class PriceItem extends PureComponent {
    render() {
        const { ingameName, userStatus, itemPrice, orderType, quantity } = this.props;
        return (
            <div className="Prices__item">
                <p className="Prices__item__ordertype">order: {orderType}</p>
                <p className="Prices__item__username">user: {ingameName}</p>
                <p className="Prices__item__status">user status: {userStatus}</p>
                <p className="Prices__item__price">price: {itemPrice}plat/each(avail: {quantity})</p>
            </div>
        )
    }
}
