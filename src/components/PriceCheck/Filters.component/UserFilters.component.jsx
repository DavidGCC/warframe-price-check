import React, { PureComponent } from 'react'
import { connect } from 'react-redux';

class UserFilters extends PureComponent {
    render() {
        const { userFilters, onChange } = this.props;
        return (
            <div className="Filters__group">
                <h4 className="Filters__group-name">User Status</h4>
                <input name="user_status" type="checkbox" checked={userFilters.includes("ingame")} onChange={onChange} value="ingame" />
                <label htmlFor="ingame">InGame</label>
                <input name="user_status" type="checkbox" checked={userFilters.includes("online")} onChange={onChange} value="online" />
                <label htmlFor="online">Online</label>
                <input name="user_status" type="checkbox" checked={userFilters.includes("offline")} onChange={onChange} value="offline" />
                <label htmlFor="offline">Offline</label>
            </div>
        )
    }
}

const mapState = state => ({
    userFilters: state.filters.userFilters 
})

export default connect(mapState, null)(UserFilters);