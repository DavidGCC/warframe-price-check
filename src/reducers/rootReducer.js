import { combineReducers } from "redux";
import { itemsReducer } from "./itemsReducer";
import { filterReducer } from "./filterReducer";

export default combineReducers({
    itemsReducer,
    filters: filterReducer
});