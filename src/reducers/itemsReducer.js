import { FETCH_ITEM, FETCH_ITEMS, FETCH_ORDERS } from "../actions/types";

export const itemsReducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_ITEMS:
            return {
                ...state,
                items: action.payload
            }
        case FETCH_ITEM:
            return {
                ...state,
                itemDetails: action.payload
            }
        case FETCH_ORDERS:
            return {
                ...state,
                itemOrders: action.payload
            }
        default:
            return state;
    }
}