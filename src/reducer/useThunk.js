import { createAsyncThunk } from "@reduxjs/toolkit";
import contentApi from "../api/formContent";

   
const delay = (ms) => new Promise(res => setTimeout(res,ms));

export const GetContent = createAsyncThunk(
    "content/GetContent",
    async(param , thunkApi) => {
        try{
            await delay(3000);
            const res = await contentApi.GetContent();
            return res.data;
        }catch(err){
            console.error("todoThunk getTotods error:", err);
            return thunkApi.rejectWithValue(
                err.message || err.response?.data || "Failed To Get Content"
            );
        }
    }
)

export const addContents = createAsyncThunk(
    "content/AddContent",
    async(data , thunkApi) => {
        try{
            await delay(3000);
            const res = await contentApi.addContent( data );
            return res.data;
        }catch(err){
            console.error("todoThunk getTotods error:", err);
            return thunkApi.rejectWithValue(
                err.message || err.response?.data || "Failed To Post Content"
            );
        }
    }
)

export const EditContent = createAsyncThunk(
    "content/EditContent",
    async(id , thunkApi) => {
        try{
            await delay(3000);
            const res = await contentApi.editContent(id);
            return res.data;
        }catch(err){
            console.error("todoThunk getTotods error:", err);
            return thunkApi.rejectWithValue(
                err.message || err.response?.data || "Failed To Get Content"
            );
        }
    }
)

// export const editUsers = createAsyncThunk(
//     "users/editUsers",
//     async(data, thunkApi) => {
//         try{
//             await delay(3000)
//             const res = await usersApi.editUsers(data)
//             return res.data
//         } catch(err){
//             console.log("todoThunk Error Edit error:",err)
//             return thunkApi.rejectWithValue(
//                 err.message || err.response?.data || "Get Users Failed"
//             );
//         }
//     }
// )

// export const deleteUsers = createAsyncThunk(
//     "users/deleteUsers",
//     async(id , thunkApi) => {
//         try{
//             await delay(3000);
//             const res = await usersApi.deleteUsers( id );
//             thunkApi.dispatch(getUsers())
//             return res.data;
//         }catch(err){
//             console.error("todoThunk getTotods error:", err);
//             return thunkApi.rejectWithValue(
//                 err.message || err.response?.data || "Get Users Failed"
//             );
//         }
//     }
// )