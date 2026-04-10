import axios from "axios";

const axiosClient = axios.create({
    baseURL: "http://localhost:8080",
    timeout: 5000,
});

axiosClient.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => Promise.reject(error)
);

axiosClient.interceptors.response.use(
    (response) => {
        console.log("axiosClient Response ==>", response);
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosClient;