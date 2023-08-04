import React, { useContext } from 'react'
import { AppContext } from '../contexts/app_context'
import Header from '../components/Header'

const Tweet = () => {

    let { clickedTweet, comments, users } = useContext(AppContext)

    console.log(clickedTweet)
  return (
    <div className='tweetPage'>

        <Header parent="tweet"/>

      <div className="tweet">
        <div className="top">
            <div className="left">
                <img src={clickedTweet.user.image} alt="" className='avatar'/>
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
                            <img src={comment.user.image} alt="" className='avatar'/>
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

    </div>
  )
}

export default Tweet
