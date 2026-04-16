import ContentAdminHook from "../../hook/ContentAdminHook";
import ListAdmin from "./ListAdmin";

function MenuAdmin(){
    const {content, navigate} = ContentAdminHook()
    return(
        <>
            <ListAdmin nav={navigate} data={content}/>
        </>
    )
}

export default MenuAdmin;