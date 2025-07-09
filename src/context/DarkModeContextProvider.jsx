import { useContext, useState, createContext } from "react";



const DarkContext = createContext();

export const userDarkContext = () => {return useContext(DarkContext)}

export function DarkModeContextProvider ({children}){
    const [darkMode, setDarkMode] = useState(false)
    function toggleDarkMode(){
        setDarkMode(pre => !pre)
    }
    return(
        <DarkContext.Provider value={{
            darkMode,
            toggleDarkMode
        }}>{children}

        </DarkContext.Provider>
    )
}