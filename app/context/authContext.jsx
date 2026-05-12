"use client"

import { createContext, useState } from "react"

const context = createContext();


export default function FContext ({children}) {
    const [name,setName] = useState("");
    function settingName (name) {
        setName(name)
    }
    return (
        <context.Provider value={{name,settingName}}>
            {children}
        </context.Provider>
    )
}

export {context}
