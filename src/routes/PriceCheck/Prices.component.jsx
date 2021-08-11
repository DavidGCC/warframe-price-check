import React, { PureComponent } from 'react'
import PriceItem from './PriceItem.component';

export default class Prices extends PureComponent {
    render() {
        const { itemOrders } = this.props;
        return (
            <div className="Prices">
                <h3 className="Prices__label">
                    Lowest 10 Prices
                </h3>
                <div className="Prices__list">
                    {
                        itemOrders?.map(order => {
                            return (
                                <PriceItem
                                    key={order.id}
                                    ingameName={order.user.ingame_name}
                                    userStatus={order.user.status}
                                    itemPrice={order.platinum}
                                    orderType={order.order_type}
                                    quantity={order.quantity}
                                />
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
