import React, { PureComponent } from 'react';
import { connect } from "react-redux";

import { fetchItems, fetchItemDetails } from "../../actions/itemActions";
import WindowedSelect from 'react-windowed-select';
import ItemSet from './ItemSet.component';

class PriceCheck extends PureComponent {
    constructor(props) {
        super(props);
        this.state = { options: [], selectValue: "" }
        this.handleFetch = this.handleFetch.bind(this);
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

    async handleFetch({ value, label }) {
        let selectValue = value;
        if (!value) {
            const itemByLabel = this.state.options.find(item => item.label === label);
            selectValue = itemByLabel;
        }
        this.setState({ selectValue });
        this.props.fetchItemDetails(selectValue.value);
    }
    render() {
        const { options, selectValue } = this.state;
        const { itemDetails } = this.props;
        console.log(itemDetails);
        return (
            <div className="PriceCheck">
                <h1 className="PriceCheck__label">Select Item:</h1>
                <WindowedSelect className="PriceCheck__select" options={options} onChange={this.handleFetch} value={selectValue}></WindowedSelect>
                <ItemSet itemDetails={itemDetails} handleFetch={this.handleFetch} />
            </div>
        )
    }
}

const mapState = state => {
    const items_in_set = state.itemsReducer.itemDetails?.items_in_set.map(item => item.en);
    return {
        items: state.itemsReducer.items,
        itemDetails: {
            id: state.itemsReducer.itemDetails?.id,
            items_in_set
        }
    }
};

const mapDispatch = { fetchItems, fetchItemDetails };


export default connect(mapState, mapDispatch)(PriceCheck);