import React, { useContext, useState } from 'react'
import Footer from '../components/Footer'
import Circle from '../components/Circle'
import { AppContext } from '../contexts/app_context'
import { useNavigate } from 'react-router-dom'
import Feed from '../components/Feed'

const Profile = ( ) => {

  let { profileRender, activeUser } = useContext(AppContext)

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
            <p className="back" onClick={() => handleClick() }>↩️</p>
          </div>

          <div className="right">
            <p className="search">🔍</p>
            <p className="share">🔝</p>
          </div>
        </header>

        <div className="profileInfo">
          <div className="top">
            <img src={activeUser.image} alt="" className='avatar'/>
            <button className="edit bold">Edit profile</button>
          </div>

          <p className='bold name'>{activeUser.firstName} {activeUser.lastName}</p>
          <p className='grey '>@{activeUser.username}</p>
          <p className="bio">{activeUser.company.title} in {activeUser.company.department}</p>

          <div className="bottom">
            <p className='location'><span>🌎 {activeUser.address.city}, {activeUser.address.state}</span> <span className="joined grey">📆 Joined September 2012 {activeUser.birthDate}</span></p>
          
            <div className="follow">
                <p><span className="bold">{Math.ceil(activeUser.weight)}</span> Following</p>
                <p><span className="bold">{Math.ceil(activeUser.height)}</span> Followers</p>
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

        <Feed parent="profile"/>
      </div>
      <Footer />
    </>
  )
}

export default Profile
