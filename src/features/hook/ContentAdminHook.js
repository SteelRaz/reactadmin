import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addContents, GetContent } from "../../reducer/useThunk";

function ContentAdminHook() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const content = useSelector(state => state.content.content)

    useEffect(() => {
        dispatch(GetContent());
    }, [dispatch]);

    const handlesavecontent = (data) => {
        if (data.id) {
            // dispatch(editUsers(data))
        } else {
            // ADD USER
            console.log("items", data)
            dispatch(addContents(data))
        }
    }

    return{
        content,
        navigate,handlesavecontent
    }
}

export default ContentAdminHook;


// import { useDispatch, useSelector } from "react-redux";
// import { addUsers, deleteUsers, editUsers, getUsers } from "../../reducer/userThunk";
// import { clearEditedUser, setEditedUser } from "../../reducer/userSlice";
// import { useCallback } from "react";
// import { toast } from "react-toastify";
 
//  export default function CustomeHook() {
//     const dispatch = useDispatch();

//     const users = useSelector(state => state.users.users)
//     const edituser = useSelector(state => state.users.editedUser)

//     // const loadUser = useCallback(
//     //     () => dispatch(getUsers())
//     //     ,[dispatch]
//     // )

//     // const refreshUser = () => {
//     //     dispatch(getUsers({_limit:5}));
//     //     console.log("datausers",users)
//     // }

//     const handleSave = (data) => {
//     if (data.id) {
//         dispatch(editUsers(data))
//     } else {
//         // ADD USER
//         console.log("items", users)
//         data.id = crypto.randomUUID();
//         dispatch(addUsers(data))
//     }
//     // reset form
//     dispatch(clearEditedUser());
//     };

//     const handleEdit = (row) => {
//     dispatch(setEditedUser(row));
//     };

//     const handleDelete = (id) => {
//     dispatch(deleteUsers(id))
//     };

//     const handleCancelEdit = () => {
//     dispatch(clearEditedUser());
//     }

//     const refreshUser = useCallback(
//         async(params) => {
//             try{
//                 console.log("Params", params)
//                 await dispatch(getUsers(params)).unwrap();
                
//             } catch (err) {
//                 console.log("Error Toast",err)
//                 toast.error(err)
//             }
//         }, [dispatch]
//     )

//     return {
//         users, edituser, 
//         refreshUser, handleSave, handleEdit, handleDelete, handleCancelEdit
//     };
//  }