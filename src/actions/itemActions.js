import { axiosInstance } from "../config";
import { FETCH_ITEM, FETCH_ITEMS, FETCH_ORDERS } from "./types";


export const fetchItems = () => async dispatch => {
    const items = await (await axiosInstance.get("/items")).data;
    dispatch({
        type: FETCH_ITEMS,
        payload: items.payload.items
    });
}

export const fetchItemDetails = itemUrlName => async dispatch => {
    const item = await (await axiosInstance.get(`/items/${itemUrlName}`)).data;
    dispatch({
        type: FETCH_ITEM,
        payload: item.payload.item
    });
}

export const fetchItemOrders = itemUrlName => async dispatch => {
    const orders = await (await axiosInstance.get(`/items/${itemUrlName}/orders`)).data;
    dispatch({
        type: FETCH_ORDERS,
        payload: orders.payload.orders
    });
}