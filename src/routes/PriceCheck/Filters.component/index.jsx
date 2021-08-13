import React, { PureComponent } from 'react'
import OrderFilters from './OrderFilters.component';
import UserFilters from './UserFilters.component';

export default class Filters extends PureComponent {
    render() {
        const { toggleUserFilter, toggleOrderFilter } = this.props;
        return (
            <div className="Filters">
                <OrderFilters onChange={toggleOrderFilter} />
                <UserFilters onChange={toggleUserFilter} />
            </div>
        )
    }
}