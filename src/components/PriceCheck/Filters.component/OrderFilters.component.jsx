import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

class OrderFilters extends PureComponent {
    render() {
        const { onChange, orderFilters } = this.props;
        return (
            <div className="Filters__group">
                <h4 className="Filters__group-name">Order Type</h4>
                <input name="order_type" type="checkbox" checked={orderFilters.includes("sell")} onChange={onChange} value="sell" />
                <label htmlFor="sell">Sell</label>
                <input name="order_type" type="checkbox" checked={orderFilters.includes("buy")} onChange={onChange} value="buy" />
                <label htmlFor="buy">Buy</label>
            </div>
        )
    }
}

const mapState = state => ({
    orderFilters: state.filters.orderFilters 
})

export default connect(mapState, null)(OrderFilters);