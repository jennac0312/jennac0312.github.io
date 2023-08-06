import React, { useContext, useEffect } from 'react'
import { AppContext } from '../contexts/app_context'
import { useNavigate } from 'react-router-dom'

const Story = () => {

    let { clickedStory, setCreateTweet } = useContext(AppContext)
    const navigate = useNavigate()

    useEffect(() => {
      setCreateTweet(true)
      console.log('countdown 5 secs')
      setTimeout(() => {
        navigate('/search')
      }, 5000);

      return() => {
        console.log('timeout cleared')
        clearTimeout()
        setCreateTweet(false)
      }

    }, [])

  return (
    <div className='storyPage'>
        <p className="exit hover" onClick={() => navigate(-1)}>✖️</p>
        <div className="progressBar"></div>
        <div className="">
            <img src={clickedStory.url} alt={clickedStory.title} />
            <p>{clickedStory.title}</p>
        </div>
    </div>
  )
}

export default Story
