import { createSlice } from '@reduxjs/toolkit';
import { addContents, EditContent, GetContent } from './useThunk';
// import { getUsers } from './todoThunk';

const contentSlice = createSlice({
    name: 'content',
    initialState: {
        content: [],
        addContent: {},
        editContent: {},
    },
    reducers: {
        addContent(state, action) {
            state.content.push({
                id: Date.now(),
                ...action.payload
            })
            console.log("action", action.payload)
        },

        // updateUser(state, action) {
        //     const index = state.users.findIndex(
        //         u => u.id === action.payload.id
        //     );
        //     if(index !== -1) {
        //         state.users[index] = action.payload;
        //     }
        // },

        // setEditedUser(state, action) {
        //     state.editedUser = action.payload;
        // },

        // clearEditedUser(state){
        //     state.editedUser = null;
        // },

        // deleteUser(state, action) {
        //     state.users = state.users.filter(
        //         user => user.id !== action.payload
        //     );
        // },
    },

    extraReducers: builder => {
        builder
            .addCase(GetContent.pending, state => {
                state.status = "loading";
                state.errormessage = null;
            })
            .addCase(GetContent.fulfilled, (state, action) => {
                state.status = "success";
                state.content = action.payload
            })
            .addCase(GetContent.rejected, (state, action) => {
                state.status = "error";
                state.errormessage = action.payload
            })


            .addCase(addContents.pending, state => {
                state.status = "loading";
                state.errormessage = null;
            })
            .addCase(addContents.fulfilled, (state, action) => {
                state.status = "success";
                // state.users.push({
                //     id: Date.now(),
                //     ...action.payload
                // })
                // console.log("action",action.payload)
                state.addContent = action.payload;
            })
            .addCase(addContents.rejected, (state, action) => {
                state.status = "error";
                state.errormessage = action.payload
            })


            .addCase(EditContent.pending, state => {
                state.status = "loading";
                state.errormessage = null;
            })
            .addCase(EditContent.fulfilled, (state, action) => {
                state.status = "success";
                state.editContent = action.payload
            })
            .addCase(EditContent.rejected, (state, action) => {
                state.status = "error";
                state.errormessage = action.payload
            })

        // .addCase(editUsers.pending, state => {
        //     state.status = "loading";
        //     state.errormessage = null;
        // })
        // .addCase(editUsers.fulfilled, (state, action) => {
        //     state.status = "success";
        //     const index = state.users.findIndex(
        //         u => u.id === action.payload.id
        //     );
        //     if(index !== -1) {
        //         state.users[index] = action.payload;
        //     }
        // })

        // .addCase(editUsers.rejected, (state, action) => {
        //     state.status = "error";
        //     state.errormessage = action.payload
        // })

        // .addCase(deleteUsers.pending, state => {
        //     state.status = "loading";
        //     state.errormessage = null;
        // })
        // .addCase(deleteUsers.fulfilled, (state, action) => {
        //     state.status = "success";
        //     state.users = state.users.filter(
        //         user => user.id !== action.payload
        //     );
        // })  
        // .addCase(deleteUsers.rejected, (state, action) => {
        //     state.status = "error";
        //     state.errormessage = action.payload
        // })
    }

});

export const { addUser, updateUser, deleteUser, setEditedUser, clearEditedUser } = contentSlice.actions;
export default contentSlice.reducer;