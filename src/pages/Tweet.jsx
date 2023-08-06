import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../contexts/app_context'
import Header from '../components/Header'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'

const Tweet = () => {

    let { clickedTweet, setClickedProfile, comments, setComments, users, activeUser, setCreateTweet } = useContext(AppContext)

    const [ isTyping, setIsTyping ] = useState(false)
    const [ message, setMessage] = useState({user: {...activeUser}, body: [], id: activeUser.id, postId: clickedTweet.post.id })

    const [ allComments, setAllComments ] = useState(...comments)

    const navigate = useNavigate()
    // console.log('CLICKED TWEET',clickedTweet)
    // console.log('COMMENTS', comments)
    // console.log('ACTIVEUSER', activeUser)
    
    const handleClick = (user, to) => {
        console.log(`${user.username} CLICKED`)
        console.log('GOING TO:', to)
        // console.log(user)
        // console.log(post)
        // console.log(tweet)
        setClickedProfile(user)
        navigate(to)
    }
    const handleChange = (e) => {
        console.log('CHANGING..............')
        console.log(e.target.value)
        // message.body = [...message.body, e.target.value]
        setMessage({...message, body: e.target.value})
        console.log(message)
        // message.body = ""
    }

    const handleEnter = (e) => {
        // e.preventDefault()

        // console.log('MESSAGE BODYYYYYYYYYYYYYY', message.body)
        // console.log(e.target.value)
        // console.log('COMMENTSSSSS', comments)

        if(message.body === "") return
        if(e.target.value === "") return
        if(e.key !== "Enter") return
        if(e.key === "Enter"){
            setComments([...comments, message])
            setAllComments([allComments, message])
            console.log('ALLLLLL COMMMENTSSSSSSSS', allComments)
            console.log(comments)
            e.target.value = ""
            // message.body = ""
            console.log(e.target.value)
        }
    }

    const clickDots = (comment) => {
        console.log('DOTSSSSSSSS')
        console.log(comment)
    }

    useEffect(() => {
        setCreateTweet(true)

        return() => {
            setCreateTweet(false)
        }
    }, [])

  return (
    <div className='tweetPage'>

        <Header parent="tweet"/>
        <main className={ !isTyping && 'addPadding'} >
            <div className="tweet">
                <div className="top">
                    <div className="left">
                        <img src={clickedTweet.user.image} alt="" className='avatar' onClick={() => handleClick(clickedTweet.user, `/profile/${clickedTweet.user?.username}`)}/>
                        <div className="stack">
                            <p className="bold name">{clickedTweet.user.firstName} {clickedTweet.user.lastName}</p>
                            <p className="grey username">@{clickedTweet.user.username}</p>
                        </div>
                    </div>
                    <p className="dots">⋯</p>
                </div>
                <div className="body">
                    <p>{clickedTweet.post.body}</p>
                </div>

                <div className="dates small">
                    <p className="time grey">01:42</p>
                    <p className='grey'>•</p>
                    <p className="date grey">8/3/23</p>
                    <p className='grey'>•</p>
                    <p className="views"><span className="bold">112K</span> <span className="grey">Views</span></p>
                </div>
                <hr />
                
                <div className="stats">
                    <p><span className="bold">686</span> <span className="grey">Reposts</span></p>
                    <p><span className="bold">150</span> <span className="grey">Quotes</span></p>
                    <p><span className="bold">2,329</span> <span className="grey">Likes</span></p>
                    <p><span className="bold">119</span> <span className="grey">Bookmarks</span></p>
                </div>
                <hr />

                <div className="reactions">
                    <p className='hover'>💬</p>
                    <p className='hover'>🔁</p>
                    <p className='hover'>💜</p>
                    <p className='hover'>🔖</p>
                    <p className='hover'>⤴️</p>
                </div>
                <hr className="full" />
                { comments.length > 0 ? 
                <div className="comments">
                    { comments.toReversed().map((comment, index) => {
                        // console.log('commenttttt',comment)
                        // console.log('comment userrrr',comment.user)
                        // console.log('user index with comment id',users[comment.user.id-1])
                        // console.log(comment.user.image)
                        if(comment.user.image === undefined){
                            comment.user = users[comment.user.id-1]
                        }
                        // console.log(comment.user)
                        return (
                            <>
                            <div className="comment" key={index} >
                                <div className="left">
                                    <img src={comment.user.image} alt="" className='avatar' onClick={() => handleClick(comment.user, `/profile/${comment.user.username}`)}/>
                                </div>
                                <div className="right">
                                    <div className="top">
                                        <div className="">
                                            <h4 className="username">{comment.user.firstName} {comment.user.lastName}</h4>
                                            <p className="username grey bold">@{comment.user.username}</p>
                                            <p className='grey'>• 23h</p>
                                        </div>
                                        <p className="dots hover" onClick={() => clickDots(comment)}>⋯</p>
                                    </div>
                                    <div className="body">
                                        <p>{comment.body}</p>
                                    </div>
                                    <div className="reactions grey">
                                        <p className='hover'>💬</p>
                                        <p className='hover'>🔁</p>
                                        <p className='hover'>💜</p>
                                        <p className='hover'>📊</p>
                                        <p className='hover'>⤴️</p>
                                    </div>
                                </div>
                            </div>
                            <hr className='full'/>
                            </>
                        )
                    }) }

                </div>
                :
                <div className="comments noComments">
                    <p className="bold"><span className='username'>@{clickedTweet.user.username}</span> hasn't recieved any comments yet</p>
                    <p className="grey">Start a conversation</p>
                    <img src="https://cdn-images-1.medium.com/max/688/1*82D2cg8Gpe9CVISaph6RPg.gif" alt="" className="gif" />
                </div>
                 }
            </div>
        </main>
        <div className="inputContainer">
            { isTyping && <p className='small grey'> Replying to <span className="blue">@{clickedTweet.user.username}</span></p> }
            <input 
                type="text" 
                placeholder='Post your reply' 
                onClick={() => setIsTyping(true)}
                onChange={(e) => handleChange(e)}
                value={message.body}
                onKeyDown={(e) => handleEnter(e)}
            />
        </div>
        <Footer />

    </div>
  )
}

export default Tweet
