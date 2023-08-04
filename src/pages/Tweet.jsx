import React, { useContext } from 'react'
import { AppContext } from '../contexts/app_context'

const Tweet = () => {

    let { clickedTweet } = useContext(AppContext)

    console.log(clickedTweet)
  return (
    <div className='tweetPage'>
      {clickedTweet.user.username}
      TWEET

    </div>
  )
}

export default Tweet
