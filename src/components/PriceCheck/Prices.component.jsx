import React, { PureComponent } from 'react'
import PriceItem from './PriceItem.component';

export default class Prices extends PureComponent {
    render() {
        const { itemOrders } = this.props;
        console.log(itemOrders);
        return (
            <div className="Prices">
                <h3 className="Prices__title">
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
                                    rank={order.mod_rank}
                                />
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
