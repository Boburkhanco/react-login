import { createContext, useState, useEffect } from "react";

let Context = createContext()

function Provider({children}){

    const [token, setToken] = useState( window.localStorage.getItem("token") || null)

    useEffect(() => {
        window.localStorage.setItem("token", token)
    }, [token])


    return(
        <Context.Provider value={{token, setToken}}>{children}</Context.Provider>
    )

}

export {Provider, Context}