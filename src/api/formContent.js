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

    deleteContent(id){
        return axiosClient.delete(`/Content-admin-Delete/${id}`)
    },
};

export default contentApi;