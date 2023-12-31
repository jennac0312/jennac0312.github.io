import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../contexts/app_context'
import { useNavigate } from 'react-router-dom'

const Menu = ( { parent } ) => {

    const navigate = useNavigate()

    let { showMenu, setShowMenu, lightMode, setLightMode, setProfileRender, handleSettingsClick, activeUser, setClickedProfile } = useContext(AppContext)

    const [ showTools, setShowTools ] = useState(false)
    const [ showSettings, setShowSettings ] = useState(false)

    const handleClick = () => {
        setShowMenu(false)
        setClickedProfile(activeUser)
        setProfileRender(parent)
        navigate('/profile')
    }

    const changeMode = () => {
      setLightMode(!lightMode)
      console.log('changing mode')
      document.querySelector('body').classList.toggle('invert')
    }

  return (
    <div className='menuContainer'>
        {/* <h1>menu</h1> */}
        <div className="top">
        <img src={activeUser?.image} alt="" className='avatar' onClick={() => handleClick()}/>
        <p className='switchAccounts'>👽</p>
        </div>

        <p className='bold name'>{activeUser.firstName} {activeUser.lastName}</p>
        <p className='grey atName bold'>@{activeUser.username}</p>

        <div className="bottom">
            <p>{ Math.ceil(activeUser.weight) } <span className='grey bold'>Following</span></p>
            <p>{ Math.ceil(activeUser.height) } <span className='grey bold'>Followers</span></p>
        </div>
        
      <nav>
        <p  className="hover" onClick={() => handleClick()}><span className='icon'>👤</span><span className='bold'>Profile</span></p>
        <p><span className='icon'>🫐</span><span className='bold'>Twitter Blue</span></p>
        <p className="hover" ><span className='icon'>🔖</span><span className='bold'>Bookmarks</span></p>
        <p className="hover" ><span className='icon'>📃</span><span className='bold'>Lists</span></p>
        <p className="hover" ><span className='icon'>🎙️</span><span className='bold'>Spaces</span></p>
      </nav>
      <div className="extra">
        <p onClick={() => setShowTools(!showTools)} className='bold hover'>
            <span>Professional Tools</span>
            <span className='arrow'>{showTools ? '🔽' : '🔼'}</span>
        </p>
        { showTools && 
            <>
                <p className='tabs'><span className="icon">🚀</span> Twitter for Professionals</p>
                <p className='tabs'><span className="icon">📈</span> Twitter Ads</p>
                <p className='tabs'><span className="icon">💰</span> Twitter Monetization</p>
            </>
        }
        <p onClick={() => setShowSettings(!showSettings)} className='bold hover'>
            <span>Settings and Support</span>
            <span className='arrow'>{showSettings ? '🔽' : '🔼'}</span>
        </p>
      { showSettings && 
          <>
              <p className='tabs' onClick={() => handleSettingsClick(parent)}><span className="icon">⚙️</span> Settings and privacy</p>
              <p className='tabs'><span className="icon">❔</span> Help Center</p>
              <p className='tabs'><span className="icon">🛒</span> Purchases</p>
          </>
      }
      </div>
      <div className="mode hover" onClick={() => changeMode()}>
        { lightMode ? '🔆' : '🌙'}
      </div>
    </div>
  )
}

export default Menu
