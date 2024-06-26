import { createContext, useState } from "react";

export const cardContext=createContext()

export const CardContextProvider=({children})=>{
    const [qTitle,setQTitle]=useState('')

    return(
        <cardContext.Provider value={{qTitle,setQTitle}}>
            {children}
        </cardContext.Provider>
    )
}