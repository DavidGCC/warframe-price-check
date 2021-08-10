import axios from "axios";

export const BASE_URL = "https://api.warframe.market/v1";
export const PROXY_URL = "http://localhost:8010/proxy"

export const axiosInstance = axios.create({
    baseURL: PROXY_URL,
    headers: {
        "Accept": "application/json",
        "Language": "en",
        "Content-Type": "application/json",
        "Authorization": `JWT ${process.env.REACT_APP_JWT_KEY}`
    }
})