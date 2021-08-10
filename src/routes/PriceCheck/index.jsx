import React, { PureComponent } from 'react';
import { connect } from "react-redux";

import { fetchItems, fetchItemDetails } from "../../actions/itemActions";
import WindowedSelect from 'react-windowed-select';

class PriceCheck extends PureComponent {
    constructor(props) {
        super(props);
        this.state = { options: [], selectValue: "" }
        this.handleChange = this.handleChange.bind(this);
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

    async handleChange({ value }) {
        this.setState({ selectValue: value })
        this.props.fetchItemDetails(value);
    }
    render() {
        const { options } = this.state;
        const { itemDetails } = this.props;
        console.log(itemDetails);
        return (
            <div className="PriceCheck">
                <h1 className="PriceCheck__label">Select Item:</h1>
                <WindowedSelect className="PriceCheck__select" options={options} onChange={this.handleChange}></WindowedSelect>
            </div>
        )
    }
}

const mapState = state => {
    return {
        items: state.itemsReducer.items,
        itemDetails: state.itemsReducer.itemDetails
    }
};

const mapDispatch = { fetchItems, fetchItemDetails };


export default connect(mapState, mapDispatch)(PriceCheck);