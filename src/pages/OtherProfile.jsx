import React, { useContext } from 'react'
import { AppContext } from '../contexts/app_context'

const OtherProfile = () => {

    let { clickedProfile } = useContext(AppContext)

  return (
    <div className='otherProfile'>
      {clickedProfile.username}
      PROFILE
    </div>
  )
}

export default OtherProfile
