import React, { useContext, useEffect } from 'react'
import { AppContext } from '../contexts/app_context'
import { useNavigate } from 'react-router-dom'

const ProfilePicture = () => {

    let { clickedProfile, setCreateTweet, backgroundImg } = useContext(AppContext)
    const navigate = useNavigate()
    // console.log(clickedProfile)

    useEffect(() => {
      setCreateTweet(true)

      return() => {
          setCreateTweet(false)
      }
  }, [])

  return (
    <div className='profilePicturePage'>
      <p className="exit hover" onClick={() => navigate(-1)}>❌</p>
      <img src={clickedProfile?.image} alt="" className='main avatar' style={{ backgroundImage : `url(${backgroundImg})`}}/>
    </div>
  )
}

export default ProfilePicture
