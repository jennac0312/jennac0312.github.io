import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../contexts/app_context'

const FeedItem = ( {user, post, backgroundImg} ) => {


    let { getRandomSpacePics } = useContext(AppContext)

    // let backgroundImage = getRandomSpacePics(1)

    useEffect(() => {
        // console.log('POST', post) 
        // console.log(currentTime)
        // let timer = setInterval(() => {
        //     setCurrentTime( new Date() )
        //     console.count(currentTime)
        // }, 30000);
        // return() => {
        //     clearInterval(timer)
        // }
    }, [])

    let { setClickedTweet, setClickedProfile } = useContext(AppContext)

    const [ likes, setLikes ] = useState(post.reactions)
    const navigate= useNavigate()

    let tweet = {
        user, post
    }

    const handleClick = (clicked, to) => {
        // console.log(`${clicked} CLICKED`)
        // console.log('GOING TO:', to)
        // console.log(user)
        // console.log(post)
        // console.log(tweet)
        setClickedProfile(user)
        setClickedTweet(tweet)
        navigate(to)
    }

  return (
    <div className='feedItem'>
        <div className="left hover" onClick={() => handleClick('PROFILE', `/profile/${user.username}`)} >
            <img src={user?.image} alt="" className='avatar' style={{ backgroundImage : `url(${backgroundImg})`}}/>
        </div>
        <div className="right small hover">
            <div className="top" onClick={() => handleClick('TWEET', `/tweet/${user.username}`)}>
                <div className="">
                    <p className="name bold">{user?.firstName}</p>
                    <p className="username grey bold">@{user?.username}</p>
                    <p className="time grey">• 3h</p>
                </div>
                <p className="dots">⋯</p>
            </div>

            <div className="middle" onClick={() => handleClick('TWEET', `/tweet/${user.username}`)}>
                <p className="body">{post.body}</p>
            </div>

            <div className="reactions">
                <p>💬{post.reactions}</p>
                <p>🔁</p>
                <p className='' onClick={() => setLikes((prev) => prev + 1)}>💜{likes}</p>
                <p>📊</p>
                <p>⤴️</p>
            </div>
        </div>
    </div>
  )
}

export default FeedItem
