import React, { PureComponent } from 'react'

export default class ItemSet extends PureComponent {
    constructor(props) {
        super(props);
        this.renderDetails = this.renderDetails.bind(this);
    }
    renderDetails() {
        const { itemDetails, handleFetch } = this.props;

        return (
            itemDetails.items_in_set?.map(item => (
                <button className="PriceCheck__item-set-button" key={item.item_name} onClick={() => handleFetch({ label: item.item_name })}>{item.item_name}</button>
            ))
        )
    }
    render() {
        const { itemDetails } = this.props;
        return (
            <div className="PriceCheck__item-set">
                <h4>Items in set</h4>
                <div className="PriceCheck__item-set-items">
                    {!itemDetails.items_in_set && <span>Select an item to see set</span>}
                    {
                        this.renderDetails()
                    }
                </div>
            </div>
        )
    }
}
