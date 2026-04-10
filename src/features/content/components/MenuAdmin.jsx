import ContentAdminHook from "../../hook/ContentAdmin";
import ListAdmin from "./ListAdmin";

function MenuAdmin(){
    const {navigate} = ContentAdminHook()
    return(
        <>
            <ListAdmin nav={navigate}/>
        </>
    )
    
}

export default MenuAdmin;