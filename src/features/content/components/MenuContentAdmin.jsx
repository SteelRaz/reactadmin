import ContentAdminHook from "../../hook/ContentAdminHook";
import ContentAdmin from "./ContentAdmin";

function MenuContetnAdmin(){
    const {navigate,handlesavecontent} = ContentAdminHook()
    return(
        <>
            <ContentAdmin nav={navigate} onSave={handlesavecontent}/>
        </>
    )
}

export default MenuContetnAdmin;