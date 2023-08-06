import React, { useContext } from 'react'
import { AppContext } from '../contexts/app_context'
import { useNavigate } from 'react-router-dom'

const Story = () => {

    let { clickedStory } = useContext(AppContext)
    const navigate = useNavigate()

  return (
    <div className='storyPage'>
        <p className="exit" onClick={() => navigate(-1)}>✖️</p>
        <div className="">
            <img src={clickedStory.url} alt={clickedStory.title} />
            <p>{clickedStory.title}</p>
        </div>
    </div>
  )
}

export default Story
