import {Outlet, Navigate} from "react-router-dom";
import useAuth from "./../Hook/useAuth"
            
function Private() {

    const [token] = useAuth()

    if(token){
        return <Outlet/> 
    }

    return <Navigate to="/login"/>
   
}

export default Private