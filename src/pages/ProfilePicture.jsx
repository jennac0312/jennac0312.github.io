import React, { useContext } from 'react'
import { AppContext } from '../contexts/app_context'
import { useNavigate } from 'react-router-dom'

const ProfilePicture = () => {

    let { clickedProfile } = useContext(AppContext)
    const navigate = useNavigate()
    console.log(clickedProfile)

  return (
    <div className='profilePicturePage'>
      <p className="exit" onClick={() => navigate(-1)}>❌</p>
      <img src={clickedProfile?.image} alt="" className='main'/>
    </div>
  )
}

export default ProfilePicture
