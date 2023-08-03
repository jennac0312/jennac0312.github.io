import React, { useContext, useState } from 'react'
import { AppContext } from '../contexts/app_context'
import { useNavigate } from 'react-router-dom'

const Header = ( {parent} ) => {

    let { showMenu, setShowMenu, activeUser, clickedMessage, handleSettingsClick } = useContext(AppContext)
    // console.log(activeUser)

    let navigate = useNavigate()


    const home = () => {
        return (
          <header>
            <div className="top">
                <img src={activeUser?.avatar} alt="" className='avatar hover' onClick={() => setShowMenu(!showMenu)}/>
                <img src="https://cdna.artstation.com/p/assets/images/images/031/538/850/original/petro-kosariekov-portal-gun-rick-and-morty2-2.gif?1603902186" alt="logo" className='logo'/>
                <img src="" alt="" className='filler'/>
            </div>
          </header>
        )
    }

    const search = () => {
        return (
            <header>
              <div className="top">
                <img src={activeUser?.avatar} alt="" className='avatar hover' onClick={() => setShowMenu(!showMenu)}/>
                <input type="text" placeholder='🔍 Search Twitter' onClick={() => navigate('/searching')}/>
                <p onClick={() => handleSettingsClick('/search')}>⚙️</p>
              </div>
            </header>
          )
    }

    const searching = () => {
        return(
            <header>
                <input type="text" placeholder='🔍 Search' className='hover' autoFocus/>
                <p className='grey hover' onClick={() => navigate('/search')}>Cancel</p>
            </header>
        )
    }

    const communities = () => {
        return (
            <header>
                <div className="top">
                    <img src={activeUser?.avatar} alt="" className='avatar hover' onClick={() => setShowMenu(!showMenu)}/>
                    <h3>Communities</h3>
                    <div className="right">
                        <p>🔍</p>
                        <p>🧑‍🤝‍🧑</p>
                    </div>
                </div>
                <div className="flex">
                    <h4>Discover new Communities</h4>
                    <p>⋯</p>
                </div>
                
            </header>
        )
    }

    const notifs = () => {
        return (
            <header>
                <img src={activeUser?.avatar} alt="" className='avatar hover' onClick={() => setShowMenu(!showMenu)}/>
                <h3>Notifications</h3>
                    <p className='gear' onClick={() => handleSettingsClick('/notifications')}>⚙️</p>
            </header>
        )
    }
    
    const dms = () => {
        return (
            <header>
              <div className="top">
                <img src={activeUser?.avatar} alt="" className='avatar hover' onClick={() => setShowMenu(!showMenu)}/>
                <h3>Messages</h3>
                    <p className='gear' onClick={() => handleSettingsClick('/messages')}>⚙️</p>
              </div>
              <div className="bottom">
              <input type="text" placeholder='🔍 Search Direct Messages' className='hover'/>
              </div>
            </header>
        )
    }

    const message = () => {
        return (
            <header>
                <div className="top">
                    <p className="back icon" onClick={() => navigate('/messages')}>⬅️</p>
                    <img src="" alt=""/>
                    <p className='info icon' >💡</p>
                    {/* onClick={() => navigate('/settings')} */}
                </div>
                <div className="bottom">
                    <h4>user name {clickedMessage}</h4>
                </div>
            </header>
        )
    }


    if( parent === "home" ) return home()
    if( parent === "search" ) return search()
    if( parent === "searching" ) return searching()
    if( parent === "communities" ) return communities()
    if( parent === "notifs" ) return notifs()
    if( parent === "dms" ) return dms()
    if( parent === "message" ) return message()
}

export default Header
