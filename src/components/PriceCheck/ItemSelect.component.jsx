import React, { PureComponent } from 'react'
import WindowedSelect from 'react-windowed-select'

export default class ItemSelect extends PureComponent {
    render() {
        const { options, handleFetch, selectValue } = this.props;
        return (
            <div className="PriceCheck__select-container">
                <lable htmlFor="item">Select An Item:</lable>
                <WindowedSelect className="PriceCheck__select" options={options} onChange={handleFetch} value={selectValue} />
            </div>
        )
    }
}
