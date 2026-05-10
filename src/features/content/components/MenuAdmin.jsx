import ContentAdminHook from "../../hook/ContentAdminHook";
import ListAdmin from "./ListAdmin";

function MenuAdmin(){
    const {content, navigate, EditData} = ContentAdminHook()
    return(
        <>
            <ListAdmin nav={navigate} data={content} edit={EditData}/>
        </>
    )
}

export default MenuAdmin;