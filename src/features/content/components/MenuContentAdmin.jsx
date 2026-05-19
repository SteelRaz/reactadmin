import ContentAdminHook from "../../hook/ContentAdminHook";
import ContentAdmin from "./ContentAdmin";

function MenuContetnAdmin(){
    const {navigate,handlesavecontent,setFilefoto,filefoto} = ContentAdminHook()
    return(
        <>
            <ContentAdmin nav={navigate} onSave={handlesavecontent} datafoto ={filefoto} setfoto={setFilefoto} />
        </>
    )
}

export default MenuContetnAdmin;