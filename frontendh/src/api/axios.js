import axios from "axios";
import Cookies from 'js-cookie'

export const axiosInstance = axios.create({
    baseURL: "http://localhost:8000",
    withCredentials: true,
    headers:{
                'Accept': 'application/json',
                "X-XSRF-TOKEN" : Cookies.get("XSRF-TOKEN")
            }
});

