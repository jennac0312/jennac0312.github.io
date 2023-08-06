import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../contexts/app_context'

const CreateTweet = () => {

    const navigate = useNavigate()
    let { setCreateTweet, activeUser, userTweets, setUserTweets, allPosts, setAllPosts } = useContext(AppContext)

    const random = () => {
        return Math.ceil( Math.random() * 10 )
    }
    const [ tweet, setTweet ] = useState({
        body: '',
        // id: userTweets?.length++,
        reactions: random(), //stays the same till page reload
        tags: [],
        title: '',
        userId: activeUser.id,
        elapsedTime: new Date()
    })
    console.log(tweet.elapsedTime)

    const post = () => {
        console.log('sending tweet')
        setUserTweets( [...userTweets, tweet ] )
        setCreateTweet(false)
        console.log(tweet)
        navigate(`/home`)
        console.log('USER TWEETS',userTweets)
    }

    // console.log(allPosts[0])
    const handleClick = () => {
        navigate(-1)
        setCreateTweet(false)
    }


  return (
    <div className='createTweet'>
        <header>
            <div className="left">
                <p onClick={() => handleClick()} className='hover small'>Cancel</p>
            </div>
            <div className="right">
                <p className='blue small bold hover'>Drafts</p>
                <button className='bold' onClick={() => post()}>Post</button>
            </div>
        </header>
        <main>
            <div className="textBox">
                <div className="left">
                    <img src={activeUser.image} alt="" className='avatar'/>
                </div>
                <div className="right">
                    <p className='public small hover'>Public🔽</p>
                    <textarea 
                    name="" id="" 
                    placeholder={`What's happening?`} 
                    autoFocus 
                    onChange={(e) => tweet.body = (e.target.value)}
                    />

                </div>
            </div>
        </main>
    </div>
  )
}

export default CreateTweet
