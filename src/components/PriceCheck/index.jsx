import React, { PureComponent } from 'react';
import { connect } from "react-redux";

import { fetchItems, fetchItemDetails, fetchItemOrders } from "../../actions/itemActions";
import { setOrderFilter, removeOrderFilter, setUserFilter, removeUserFilter } from "../../actions/filterActions";
import WindowedSelect from 'react-windowed-select';
import ItemSet from './ItemSet.component';
import Prices from './Prices.component';
import Filters from './Filters.component';

export const USER_STATUS = ["ingame", "online", "offline"];
export const ORDER_TYPE = ["sell", "buy"];

class PriceCheck extends PureComponent {
    constructor(props) {
        super(props);
        this.state = { options: [], selectValue: "", filters: [] }
        this.handleFetch = this.handleFetch.bind(this);
        this.toggleOrderFilter = this.toggleOrderFilter.bind(this);
        this.toggleUserFilter = this.toggleUserFilter.bind(this);
    }

    async componentDidMount() {
        const { fetchItems } = this.props;
        await fetchItems();
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

    toggleOrderFilter({ target: { value } }) {
        const { filters: { orderFilters }, setOrderFilter, removeOrderFilter } = this.props;
        orderFilters.includes(value) ? removeOrderFilter(value) : setOrderFilter(value);
    }


    toggleUserFilter({ target: { value } }) {
        const { filters: { userFilters }, setUserFilter, removeUserFilter } = this.props;
        userFilters.includes(value) ? removeUserFilter(value) : setUserFilter(value);
    }


    async handleFetch({ value, label }) {
        let selectValue = { value, label };
        const { options } = this.state;
        const { fetchItemDetails, fetchItemOrders } = this.props;
        if (!value) {
            const itemByLabel = options.find(item => item.label === label);
            selectValue = itemByLabel;
        }
        this.setState({ selectValue });
        fetchItemDetails(selectValue.value);
        fetchItemOrders(selectValue.value);
    }

    render() {
        const { options, selectValue } = this.state;
        const { itemDetails, itemOrders, filters } = this.props;
        return (
            <div className="PriceCheck">
                <h1 className="PriceCheck__label">Select Item:</h1>
                <WindowedSelect className="PriceCheck__select" options={options} onChange={this.handleFetch} value={selectValue} />
                {selectValue && <ItemSet itemDetails={itemDetails} handleFetch={this.handleFetch} />}
                <Filters filters={filters} toggleOrderFilter={this.toggleOrderFilter} toggleUserFilter={this.toggleUserFilter} />
                {selectValue && <Prices selectedItem={selectValue} itemOrders={itemOrders} />}
            </div>
        )
    }
}

const mapState = state => {
    const { items, itemDetails, itemOrders: itemOrdersState } = state.itemsReducer;
    const items_in_set = itemDetails?.items_in_set.map(item => item.en);
    const itemOrders = itemOrdersState
        ?.filter((order) => {
            const { userFilters, orderFilters } = state.filters;
            const { order_type, user: { status } } = order;

            return orderFilters.includes(order_type) && userFilters.includes(status);
        })
        .sort((a, b) => a.platinum - b.platinum)
        .slice(0, 10);

    return {
        items,
        itemDetails: {
            id: itemDetails?.id,
            items_in_set
        },
        itemOrders,
        filters: state.filters
    }
};

const mapDispatch = {
    fetchItems,
    fetchItemDetails,
    fetchItemOrders,
    setOrderFilter,
    removeOrderFilter,
    setUserFilter,
    removeUserFilter
};


export default connect(mapState, mapDispatch)(PriceCheck);