import React, { useState } from 'react'
import Footer from '../components/Footer'

const Profile = () => {

  const [ count, setCount ] = useState(0)

  return (
    <div className='profilePage'>
      <header>
        {/* background image */}
        <div className="left">
          <p className="back">↩️</p>
        </div>

        <div className="right">
          <p className="search">🔍</p>
          <p className="share">🔝</p>
        </div>
      </header>

      <div className="profileInfo">
        <div className="top">
          <img src="" alt="avatar" className='avatar'/>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Profile
