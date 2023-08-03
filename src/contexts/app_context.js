import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext()

const AppContextProvider = (props) => {

    const navigate = useNavigate()
    const [ showMenu, setShowMenu ] = useState(false) // toggle menu
    const [ profileRender, setProfileRender ] = useState("") // for back button in profile
    const [ settingsRender, setSettingsRender ] = useState("") //for back button in settings
    const [ lightMode, setLightMode ] = useState(false) // maybe

    const [ users, setUsers ] = useState([])
    const [ activeUser, setActiveUser ] = useState(users[3])
    const [ clickedProfile, setClickedProfile ] = useState({})
    const [ search, setSearch ] = useState("") // for searching page
    const [ clickedMessage, setClickedMessage ] = useState({}) // for dms

    // API
    const fetchUsers = async () => {
        const response = await axios.get('https://dummyjson.com/users?limit=100')
        console.log('USERS FETCH DATA:',response.data.users)
        setUsers(response.data.users)

        setActiveUser(response.data.users[3]) //since users state has no value yet
        return response.data
    }

    useEffect(() => {
        fetchUsers()
        console.log('USERS', users)
    }, [])

    // functions
    const handleSettingsClick = (parent) => {
        setShowMenu(false)
        setSettingsRender(parent)
        navigate('/settings')
    }

    return(
        <AppContext.Provider value={{
            // pass state here
            showMenu, setShowMenu, lightMode, setLightMode, profileRender, setProfileRender,
            users, activeUser, clickedProfile, setClickedProfile,
            search, setSearch,
            clickedMessage, setClickedMessage,

            handleSettingsClick, settingsRender, setSettingsRender

        }}>

            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider