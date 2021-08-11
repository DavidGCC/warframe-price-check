import React, { PureComponent } from 'react';
import { connect } from "react-redux";

import { fetchItems, fetchItemDetails, fetchItemOrders } from "../../actions/itemActions";
import { setFilter, removeFilter } from "../../actions/filterActions"; 
import WindowedSelect from 'react-windowed-select';
import ItemSet from './ItemSet.component';
import Prices from './Prices.component';

class PriceCheck extends PureComponent {
    constructor(props) {
        super(props);
        this.state = { options: [], selectValue: "", filters: [] }
        this.handleFetch = this.handleFetch.bind(this);
        this.toggleFilter = this.toggleFilter.bind(this);
    }

    async componentDidMount() {
        await this.props.fetchItems();
        this.setState({ options: this.createOptions() })
    }

    createOptions() {
        const { items } = this.props;
        const options = items.reduce((res, curr) => {
            const option = { value: curr.url_name, label: curr.item_name }
            return [...res, option];
        }, []);
        return options;
    }

    toggleFilter({ target: { value } }) {
        const { filters, setFilter, removeFilter } = this.props;
        if (filters.includes(value)) {
            removeFilter(value);
        } else {
            setFilter(value);
        }
    }

    async handleFetch({ value, label }) {
        let selectValue = { value, label };
        if (!value) {
            const itemByLabel = this.state.options.find(item => item.label === label);
            selectValue = itemByLabel;
        }
        this.setState({ selectValue });
        this.props.fetchItemDetails(selectValue.value);
        this.props.fetchItemOrders(selectValue.value);
    }
    render() {
        const { options, selectValue } = this.state;
        const { itemDetails, itemOrders, filters } = this.props;
        return (
            <div className="PriceCheck">
                <h1 className="PriceCheck__label">Select Item:</h1>
                <WindowedSelect className="PriceCheck__select" options={options} onChange={this.handleFetch} value={selectValue}></WindowedSelect>
                <ItemSet itemDetails={itemDetails} handleFetch={this.handleFetch} />
                <input name="order_type" type="checkbox" checked={filters.includes("sell")} onChange={this.toggleFilter} value="sell"/>Sell
                <input name="order_type" type="checkbox" checked={filters.includes("buy")} onChange={this.toggleFilter} value="buy"/>Buy
                {selectValue && <Prices selectedItem={selectValue} itemOrders={itemOrders} />}
            </div>
        )
    }
}

const mapState = state => {
    const items_in_set = state.itemsReducer.itemDetails?.items_in_set.map(item => item.en);
    console.log(state);
    const itemOrders = state.itemsReducer.itemOrders?.filter(order => {
        const isIngame = order.user.status === "ingame";
        const { filters } = state;
        if (isIngame && filters.length > 0) {
            return filters.includes(order.order_type)
        } else if (isIngame && filters.length === 0) {
            return true;
        } else {
            return false;
        }
    })
        .sort((a, b) => a.platinum - b.platinum)
        .slice(0, 10);
    return {
        items: state.itemsReducer.items,
        itemDetails: {
            id: state.itemsReducer.itemDetails?.id,
            items_in_set
        },
        itemOrders: itemOrders,
        filters: state.filters
    }
};

const mapDispatch = { fetchItems, fetchItemDetails, fetchItemOrders, setFilter, removeFilter };


export default connect(mapState, mapDispatch)(PriceCheck);