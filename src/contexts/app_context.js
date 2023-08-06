import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext()

const AppContextProvider = (props) => {

    const navigate = useNavigate()
    const [ isLoading, setIsLoading ] = useState(true)
    const [ showMenu, setShowMenu ] = useState(false) // toggle menu
    const [ createTweet, setCreateTweet ] = useState(false) // get rid of circle
    const [ userTweets, setUserTweets ] = useState([]) // holds all created tweets
    const [ userLikes, setUserLikes ] = useState([]) // holds liked tweets

    const [ profileRender, setProfileRender ] = useState("") // for back button in profile
    const [ settingsRender, setSettingsRender ] = useState("") //for back button in settings
    const [ lightMode, setLightMode ] = useState(false) // maybe

    const [ users, setUsers ] = useState([])
    const [ activeUser, setActiveUser ] = useState(users[3])
    const [ backgroundImg, setBackgroundImg ] = useState("")
    const [ clickedProfile, setClickedProfile ] = useState({})
    const [ search, setSearch ] = useState("") // for searching page
    const [ searchResults, setSearchResults ] = useState([])
    const [ recentSearched, setRecentSearched ] = useState([])
    const [ clickedMessage, setClickedMessage ] = useState({}) // for dms
    const [ reply, setReply ] = useState({message: '', user:{} }) // for dm response
    const [ allMessages, setAllMessages ] = useState([]) //to keep dm convo
    const [ spacePics, setSpacePics ] = useState([]) // for space api
    const [ clickedStory, setClickedStory ] = useState({})


    const [ clickedTweet, setClickedTweet ] = useState({})
    const [ comments, setComments ] = useState([])
    const [ profilePosts, setProfilePosts ] = useState([])

    const [ allPosts, setAllPosts ] = useState([]) //home page tweets

    // API
    const fetchUsers = async () => {
        const response = await axios.get('https://dummyjson.com/users?limit=100')
        // console.log('USERS FETCH DATA:',response.data.users)
        setUsers(response.data.users)

        setActiveUser(response.data.users[3]) //since users state has no value yet
        return response.data
    }

    const fetchPosts = async () => {
        console.log('%cFETCHING POSTS', 'color:purple; font-size: 20px')
        const response = await axios.get('https://dummyjson.com/posts?limit=150')
            // .then(res => res.json())
            // .then(console.log);
        console.log('POSTS FETCH DATA', response.data.posts)
        setAllPosts(response.data.posts)
    }

    const fetchCommentsForPost = async (postId) => {
        if(postId === undefined) return
        const response = await axios.get(`https://dummyjson.com/comments/post/${postId}`)

        console.log(`COMMENTS FOR POST ${postId}`,response.data.comments)
        setComments(response.data.comments)
    }

    const fetchProfilePosts = async (userId) => {

        if(userId === undefined) return
        const response = await axios.get(`https://dummyjson.com/posts/user/${userId}`)

        console.log('POSTS FOR PROFILE', response.data.posts)
        setProfilePosts(response.data.posts)
    }

    const fetchSearchedUsers = async () => {
        const response = await axios.get(`https://dummyjson.com/users/search?q=${search}`)

        console.log(response.data.users)
        setSearchResults(response.data.users)
    }

    const fetchReply = async () => {
        let response

        if(Math.random() > .5 ){
            response = await axios.get(`https://dummyjson.com/quotes/random`)
        } else {
            response = await axios.get(`https://api.kanye.rest/`)
        }

        console.log(response.data.quote)
        setReply({message: response.data.quote, user: clickedMessage, dmId: clickedMessage.id})
    }

    const fetchNasa = async () => {
        const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_KEY}&count=20`)

        // console.log(process.env.REACT_APP_NASA_KEY)


        console.log(response.data)

        // add each img to array
        // response.data.photos.forEach((photo) => {
        //     setSpacePics([...spacePics, photo.img_src])
        // })

        setSpacePics(response.data)

        // console.log(spacePics)
    }

    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
      } // from mdn


    const getRandomSpacePics = (howMany) => {
        let pics = []
        for(let i = 0; i < howMany; i++){
            pics.push(spacePics[getRandomIntInclusive(0, spacePics.length) - 1])
        }
        return pics
    }

    const fetchNaturePics = async () => {
        const response = await axios.get('https://api.api-ninjas.com/v1/randomimage?category=nature')

        console.log(response)
    }

    // EFFECTS
    useEffect(() => {
        fetchUsers()
        console.log('USERS', users)
        fetchPosts()
        console.log('POSTS', allPosts)
        fetchProfilePosts()
        fetchNasa()
    }, [])
    
    useEffect(() => {
        setBackgroundImg( getRandomSpacePics(1)[0]?.url )
        document.querySelectorAll('.avatar').forEach((avatar) => {
            avatar.setAttribute('style', `backgroundImage : url(${getRandomSpacePics(1)[0]?.url})`)
        })
    }, [spacePics])
    
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
            isLoading, setIsLoading,
            showMenu, setShowMenu, lightMode, setLightMode,
            setCreateTweet, createTweet,
            userTweets, setUserTweets,
            profileRender, setProfileRender,
            users, activeUser,

            backgroundImg,

            userLikes, setUserLikes,

            search, setSearch, searchResults, setSearchResults, recentSearched, setRecentSearched,

            clickedMessage, setClickedMessage, 
            fetchReply, reply, setReply,
            allMessages, setAllMessages,

            handleSettingsClick, settingsRender, setSettingsRender,

            allPosts, setAllPosts,

            clickedTweet, setClickedTweet,
            clickedProfile, setClickedProfile,

            fetchCommentsForPost, comments, setComments,

            profilePosts,

            fetchUsers, fetchPosts, fetchProfilePosts,

            fetchNasa,

            spacePics, getRandomSpacePics,
            clickedStory, setClickedStory,

            getRandomIntInclusive
        }}>

            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider