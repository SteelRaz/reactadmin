import ContentAdminHook from "../../hook/ContentAdminHook";
import ContentEdit from "./ContentEdit";

function MenuContetnEdit(){
    const {navigate,handlesavecontent,dataedit} = ContentAdminHook()
    return(
        <>
            <ContentEdit nav={navigate} onSave={handlesavecontent} editData={dataedit}/>
        </>
    )
}

export default MenuContetnEdit;