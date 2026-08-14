import ContentAdminHook from "../hook/ContentAdminHook";
import ListAdmin from "./ListAdmin";

function MenuAdmin(){
    const {content, navigate, EditData, DeleteData} = ContentAdminHook()
    return(
        <>
            <ListAdmin nav={navigate} data={content} onEdit={EditData} onDelete={DeleteData}/>
        </>
    )
}

export default MenuAdmin;