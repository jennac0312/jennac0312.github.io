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
    const [ searchResults, setSearchResults ] = useState([])
    const [ recentSearched, setRecentSearched ] = useState([])
    const [ clickedMessage, setClickedMessage ] = useState({}) // for dms
    const [ clickedTweet, setClickedTweet ] = useState({})
    const [ comments, setComments ] = useState([])
    const [ profilePosts, setProfilePosts ] = useState([])

    const [ allPosts, setAllPosts ] = useState([])

    // API
    const fetchUsers = async () => {
        const response = await axios.get('https://dummyjson.com/users?limit=100')
        // console.log('USERS FETCH DATA:',response.data.users)
        setUsers(response.data.users)

        setActiveUser(response.data.users[3]) //since users state has no value yet
        return response.data
    }

    const fetchPosts = async () => {
        const response = await axios.get('https://dummyjson.com/posts?limit=150')
            // .then(res => res.json())
            // .then(console.log);
        console.log('POSTS FETCH DATA', response.data.posts)
        setAllPosts(response.data.posts)
    }

    const fetchCommentsForPost = async (postId) => {
        const response = await axios.get(`https://dummyjson.com/comments/post/${postId}`)

        console.log(`COMMENTS FOR POST ${postId}`,response.data.comments)
        setComments(response.data.comments)
    }

    const fetchProfilePosts = async (userId) => {
        const response = await axios.get(`https://dummyjson.com/posts/user/${userId}`)

        console.log('POSTS FOR PROFILE', response.data.posts)
        setProfilePosts(response.data.posts)
    }

    const fetchSearchedUsers = async () => {
        const response = await axios.get(`https://dummyjson.com/users/search?q=${search}`)

        console.log(response.data.users)
        setSearchResults(response.data.users)
    }

    // EFFECTS
    useEffect(() => {
        fetchUsers()
        console.log('USERS', users)
        fetchPosts()
        console.log('POSTS', allPosts)
        fetchProfilePosts()
    }, [])
    
    // grab comments when tweet is clicked
    // wish you would stop running on mount and only run when clickedTweet changes like you're supposed to
    useEffect(() => {
        fetchCommentsForPost(clickedTweet?.post?.id)
    }, [clickedTweet])
    // grabbing posts per profile
    useEffect(() => {
        fetchProfilePosts(clickedProfile?.id)
    }, [clickedProfile])

    // grabbing for search results
    useEffect(() => {
        fetchSearchedUsers()
    }, [search])

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
            users, activeUser,

            search, setSearch, searchResults, setSearchResults, recentSearched, setRecentSearched,

            clickedMessage, setClickedMessage,

            handleSettingsClick, settingsRender, setSettingsRender,

            allPosts,

            clickedTweet, setClickedTweet,
            clickedProfile, setClickedProfile,

            fetchCommentsForPost, comments, setComments,

            profilePosts
        }}>

            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider