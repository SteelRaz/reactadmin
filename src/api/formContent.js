import axiosClient from "./axiosClient"


const contentApi = {
    GetContent(){
        return axiosClient.get("/GetContent")
    },

    addContent(data){
        return axiosClient.post("/AddContent", data)
    },
};

export default contentApi;