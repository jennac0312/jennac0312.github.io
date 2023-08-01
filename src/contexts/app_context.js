import { createContext, useState } from "react";

export const AppContext = createContext()

const AppContextProvider = (props) => {

    const [ showMenu, setShowMenu ] = useState(false)

    return(
        <AppContext.Provider value={{
            // pass state here
            showMenu, setShowMenu
        }}>

            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider