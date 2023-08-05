import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../contexts/app_context'

const CreateTweet = () => {

    const navigate = useNavigate()
    let { setCreateTweet, activeUser, tweet, setTweet, allPosts, setAllPosts } = useContext(AppContext)

    const [ tweetText, setTweetText ] = useState("")

    // let tweetText = ""

    // console.log(allPosts[0])
    const handleClick = () => {
        navigate(-1)
        setCreateTweet(false)
    }

    const post = () => {
        // grab tweet value
        // console.log(tweet)
        console.log('%cPOSTING', 'color: red; font-size: 20px')
        console.log(tweetText)
        setTweet(
            {
                body: tweetText,
                id: allPosts.length++,
                reactions: 0,
                tags: [],
                title: '',
                userId: activeUser.id,
            }
        )

        console.log('TWEEEEET',tweet)
        // add to all posts
        if( tweet ) {
            console.log('%cadding to posts', 'color:lime')
            setAllPosts([...allPosts, tweet])
            console.log(allPosts)
        }
        
        // filter out undeifned posts
        
        setAllPosts(allPosts.filter((post) => typeof post !== undefined))
        console.log(allPosts)
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
                    onChange={(e) => setTweetText(e.target.value)}
                    />

                </div>
            </div>
        </main>
    </div>
  )
}

export default CreateTweet
