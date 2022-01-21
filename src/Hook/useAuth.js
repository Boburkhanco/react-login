import { useContext } from "react";
import { Context } from "../Context/AuthContext";


function useAuth (){

    const {token, setToken} = useContext(Context)

    return [token, setToken]
}

export default useAuth;