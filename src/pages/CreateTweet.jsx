import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../contexts/app_context'

const CreateTweet = () => {

    const navigate = useNavigate()
    let { setCreateTweet } = useContext(AppContext)

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
                <button className='bold'>Post</button>
            </div>
        </header>
    </div>
  )
}

export default CreateTweet
