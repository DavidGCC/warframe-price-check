import { REMOVE_ORDER_FILTER, REMOVE_USER_FILTER, SET_ORDER_FILTER, SET_USER_FILTER } from "./types";

export const setOrderFilter = (filter) => ({
    type: SET_ORDER_FILTER,
    filter
});

export const removeOrderFilter = filter => ({
    type: REMOVE_ORDER_FILTER,
    filter
});

export const setUserFilter = filter => ({
    type: SET_USER_FILTER,
    filter
});

export const removeUserFilter = filter => ({
    type: REMOVE_USER_FILTER,
    filter
});