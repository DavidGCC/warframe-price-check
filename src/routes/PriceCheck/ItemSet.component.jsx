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
                <button key={item.item_name} onClick={() => handleFetch({ label: item.item_name })}>{item.item_name}</button>
            ))
        )
    }
    render() {
        return (
            <div className="PriceCheck__item-set">
                {
                    this.renderDetails()
                }
            </div>
        )
    }
}
