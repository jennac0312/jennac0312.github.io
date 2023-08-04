import React, { useContext } from 'react'
import { AppContext } from '../contexts/app_context'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Feed from '../components/Feed'
import Footer from '../components/Footer'

const OtherProfile = () => {

    let { clickedProfile, profileRender } = useContext(AppContext)
    console.log('CLICKED PROFILE', clickedProfile)

    const [ count, setCount ] = useState(0)
    const navigate = useNavigate()
  
    console.log('PROFILE RENDERER: ', profileRender)
  
    const handleClick = () => {
      console.log('RETURN TO:', profileRender)
      navigate(profileRender)
    }
  
    return (
      <>
        <div className='profilePage'>
          <header>
            {/* background image */}
            <div className="left">
              <p className="back" onClick={() => navigate(-1) }>↩️</p>
            </div>
  
            <div className="right">
              <p className="search">🔍</p>
              <p className="share">🔝</p>
            </div>
          </header>
  
          <div className="profileInfo">
            <div className="top">
              <img src={clickedProfile.image} alt="" className='avatar'/>
              <div className="right">
                <p className="message">✉️</p>
                <button className="followButton bold">Follow</button>
              </div>
            </div>
  
            <p className='bold name'>{clickedProfile.firstName} {clickedProfile.lastName}</p>
            <p className='grey '>@{clickedProfile.username}</p>
            <p className="bio">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus, inventore.</p>
  
            <div className="bottom">
              <p className='location'><span>🌎 {clickedProfile.address.city}, {clickedProfile.address.state}</span> <span className="joined grey">📆 {clickedProfile.birthDate}</span></p>
            
              <div className="follow">
                  <p><span className="bold">{Math.ceil(clickedProfile.weight)}</span> Following</p>
                  <p><span className="bold">{Math.ceil(clickedProfile.height)}</span> Followers</p>
              </div>
  
              <div className="tabs">
                <p onClick={() => setCount(0)} className={count === 0 && 'underline'}>Tweets</p>
                <p onClick={() => setCount(1)} className={count === 1 && 'underline'}>Replies</p>
                <p onClick={() => setCount(2)} className={count === 2 && 'underline'}>Highlights</p>
                <p onClick={() => setCount(3)} className={count === 3 && 'underline'}>Media</p>
                <p onClick={() => setCount(4)} className={count === 4 && 'underline'}>Likes</p>
              </div>
  
            </div>
          </div>
  
          <Feed />
        </div>
        <Footer />
      </>
    )
}

export default OtherProfile
