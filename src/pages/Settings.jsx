import React, { useContext, useEffect } from 'react'
import settings from '../models/settings_model'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../contexts/app_context'

const Settings = () => {

    let { setShowMenu, handleSettingsClick, settingsRender, setCreateTweet } = useContext(AppContext)
    const navigate = useNavigate()

    const handleClick = (to) => {
        console.log('RETURN TO SETTINGS RENDERER: ',to)
        setShowMenu(false)
        navigate(to)
    }

    useEffect(() => {
        setCreateTweet(true)

        return() => {
            setCreateTweet(false)
        }
    }, [])

  return (
    <div className='settings'>

        <div className="top">
            <p className="back hover" onClick={() => handleClick(settingsRender)}>⬅️</p>
            <div className="stack">
                <h3>Settings</h3>
                <p className="grey small username">@username</p>
            </div>
                <p className='invisible'>⬅️</p>
        </div>
        <div className="bottom">
            <input type="text hover" placeholder='🔍 Search settings' />
        </div>

        { settings.map((setting, index) => {
            return (
                <div className="settingContainer hover" key={index}>
                    <p className='logo'>{setting.logo}</p>

                    <div className="middle">
                        <p className='bold'>{setting.title}</p>
                        <p className='grey small'>{setting.description}</p>
                    </div>

                    <p>▶️</p>
                </div>
            )
        }) }

    </div>
  )
}

export default Settings
