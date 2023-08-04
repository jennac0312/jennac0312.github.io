import React, { useContext, useState } from 'react'
import { AppContext } from '../contexts/app_context'
import Header from '../components/Header'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'

const Tweet = () => {

    let { clickedTweet, setClickedProfile, comments, setComments, users } = useContext(AppContext)

    const [ isTyping, setIsTyping ] = useState(false)

    const navigate = useNavigate()
    console.log(clickedTweet)
    const handleClick = (user, to) => {
        console.log(`${user.username} CLICKED`)
        console.log('GOING TO:', to)
        // console.log(user)
        // console.log(post)
        // console.log(tweet)
        setClickedProfile(user)
        navigate(to)
    }

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
                    <p>💬</p>
                    <p>🔁</p>
                    <p>💜</p>
                    <p>🔖</p>
                    <p>⤴️</p>
                </div>
                <hr className="full" />

                <div className="comments">
                    { comments.map((comment, index) => {
                        comment.user = users[index+1]
                        return (
                            <>
                            <div className="comment" key={index}>
                                <div className="left">
                                    <img src={comment.user.image} alt="" className='avatar' onClick={() => handleClick(comment.user, `/profile/${comment.user.username}`)}/>
                                </div>
                                <div className="right">
                                    <div className="top">
                                        <div className="">
                                            <h4 className="username">{comment.user.firstName} {comment.user.lastName}</h4>
                                            <p className="username grey">@{comment.user.username}</p>
                                            <p className='grey'>• 23h</p>
                                        </div>
                                        <p className="dots">⋯</p>
                                    </div>
                                    <div className="body">
                                        <p>{comment.body}</p>
                                    </div>
                                    <div className="reactions grey">
                                        <p>💬</p>
                                        <p>🔁</p>
                                        <p>💜</p>
                                        <p>📊</p>
                                        <p>⤴️</p>
                                    </div>
                                </div>
                            </div>
                            <hr className='full'/>
                            </>
                        )
                    }) }

                </div>
            </div>
        </main>
        <div className="inputContainer">
            { isTyping && <p className='small grey'> Replying to <span className="blue">@{clickedTweet.user.username}</span></p> }
            <input type="text" placeholder='Post your reply' onClick={() => setIsTyping(true)} on/>
        </div>
        <Footer />

    </div>
  )
}

export default Tweet
