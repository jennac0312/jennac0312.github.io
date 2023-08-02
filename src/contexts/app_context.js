import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AppContext = createContext()

const AppContextProvider = (props) => {

    const [ showMenu, setShowMenu ] = useState(false) // toggle menu
    const [ profileRender, setProfileRender ] = useState("") // for back button in profile
    const [ lightMode, setLightMode ] = useState(false) // maybe

    const [ robots, setRobots ] = useState([])
    const [ activeUser, setActiveUser ] = useState(robots[3])
    const [ clickedProfile, setClickedProfile ] = useState({})

    // API
    const fetchRobots = async () => {
        const response = await axios.get('https://random-data-api.com/api/v2/users?size=25&is_xml=true')
        console.log(response.data)
        setRobots(response.data)

        return response.data
    }

    useEffect(() => {
        fetchRobots()
        console.log('ROBOTS', robots)
        setActiveUser(robots[3])
        return () => {
            setRobots(fetchRobots())
            // console.log(robots)
        }
    }, [])

    return(
        <AppContext.Provider value={{
            // pass state here
            showMenu, setShowMenu, lightMode, setLightMode, profileRender, setProfileRender,
            robots, activeUser, clickedProfile, setClickedProfile
        }}>

            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider