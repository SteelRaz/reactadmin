import { useNavigate } from "react-router-dom";

function ContentAdminHook() {
    const navigate = useNavigate()

    return{
        navigate
    }
}

export default ContentAdminHook;