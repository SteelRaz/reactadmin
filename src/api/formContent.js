import axiosClient from "./axiosClient"


const contentApi = {
    GetContent(){
        return axiosClient.get("/GetContent")
    },

    addContent(data){
        return axiosClient.post("/AddContent", data)
    },

    editContent(id){
        return axiosClient.get(`/Content-admin-Edit/${id}`)
    },
};

export default contentApi;