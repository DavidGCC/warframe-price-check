import { FETCH_ITEM, FETCH_ITEMS } from "../actions/types";

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
        default:
            return state;
    }
}