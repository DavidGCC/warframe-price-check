import { REMOVE_FILTER, SET_FILTER } from "./types";

export const setFilter = (filter) => ({
    type: SET_FILTER,
    filter
});

export const removeFilter = filter => ({
    type: REMOVE_FILTER,
    filter
})