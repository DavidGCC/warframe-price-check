import { SET_FILTER, REMOVE_FILTER } from "../actions/types";

export const filterReducer = (state = [], action) => {
    switch (action.type) {
        case SET_FILTER:
            return [
                ...state, action.filter
            ];
        case REMOVE_FILTER:
            const newState = [...state].filter(f => f !== action.filter)
            return newState;
        default:
            return state;
    }
}