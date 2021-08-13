import { SET_ORDER_FILTER, REMOVE_ORDER_FILTER, SET_USER_FILTER, REMOVE_USER_FILTER } from "../actions/types";

const initialState = {
    orderFilters: ["sell"],
    userFilters: ["ingame"]
};

export const filterReducer = (state = initialState, action) => {
    const { type, filter } = action;
    const { orderFilters, userFilters } = state;
    switch (type) {
        case SET_ORDER_FILTER:
            return {
                ...state,
                orderFilters: [...orderFilters, filter]
            }
        case REMOVE_ORDER_FILTER:
            const newOrderFilters = [...orderFilters].filter(f => f !== filter);
            return {
                ...state,
                orderFilters: newOrderFilters
            }
        case SET_USER_FILTER:
            return {
                ...state,
                userFilters: [ ...userFilters, filter ]
            }
        case REMOVE_USER_FILTER:
            const newUserFilters = [ ...userFilters ].filter(f => f !== filter);
            return {
                ...state,
                userFilters: newUserFilters
            }
        default:
            return state;
    }
}