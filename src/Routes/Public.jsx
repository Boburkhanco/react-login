import {Outlet, useLocation, Navigate} from "react-router-dom"
import useAuth from "./../Hook/useAuth"

function Public() {

    const [token] = useAuth()

    const {pathname} = useLocation()

    if(token && pathname === "/login"){
        return <Navigate to="/about"/>
    }

    return  <Outlet/>
}

// Authorization
// Authentication
// RBAC - Role Based Acess Controll

export default Public