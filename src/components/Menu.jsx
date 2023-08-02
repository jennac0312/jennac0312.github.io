import React, { useContext, useState } from 'react'
import { AppContext } from '../contexts/app_context'
import { useNavigate } from 'react-router-dom'

const Menu = ( { parent } ) => {

    const navigate = useNavigate()

    let { showMenu, setShowMenu, lightMode, setLightMode, setProfileRender } = useContext(AppContext)

    const [ showTools, setShowTools ] = useState(false)
    const [ showSettings, setShowSettings ] = useState(false)

    const handleClick = () => {
        setShowMenu(false)
        setProfileRender(parent)
        navigate('/profile')
    }

  return (
    <div className='menuContainer'>
        {/* <h1>menu</h1> */}
        <div className="top">
        <img src="" alt="" srcset="" className='avatar' onClick={() => handleClick()}/>
        <p className='switchAccounts'>👽</p>
        </div>

        <p className='bold name'>user name</p>
        <p className='grey atName'>@username</p>

        <div className="bottom">
            <p>220 <span className='grey'>Following</span></p>
            <p>220 <span className='grey'>Followers</span></p>
        </div>
      
      <nav>
        <p><span className='icon'>👤</span><span className='bold'>Profile</span></p>
        <p><span className='icon'>🫐</span><span className='bold'>Twitter Blue</span></p>
        <p><span className='icon'>🔖</span><span className='bold'>Bookmarks</span></p>
        <p><span className='icon'>📃</span><span className='bold'>Lists</span></p>
        <p><span className='icon'>🎙️</span><span className='bold'>Spaces</span></p>
      </nav>
        <hr />
      <div className="extra">
        <p onClick={() => setShowTools(!showTools)} className='bold'>
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
        <p onClick={() => setShowSettings(!showSettings)} className='bold'>
            <span>Settings and Support</span>
            <span className='arrow'>{showSettings ? '🔽' : '🔼'}</span>
        </p>
      { showSettings && 
          <>
              <p className='tabs'><span className="icon">⚙️</span> Settings and privacy</p>
              <p className='tabs'><span className="icon">❔</span> Help Center</p>
              <p className='tabs'><span className="icon">🛒</span> Purchases</p>
          </>
      }
      </div>
      <div className="mode" onClick={() => setLightMode(!lightMode)}>
        { lightMode ? '🔆' : '🌙'}
      </div>
    </div>
  )
}

export default Menu
