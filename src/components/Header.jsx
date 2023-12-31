import React, { useContext, useState } from 'react'
import { AppContext } from '../contexts/app_context'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const Header = ( { parent, setAllMessages } ) => {

    let { showMenu, setShowMenu, activeUser, clickedMessage, handleSettingsClick, setSearch, search } = useContext(AppContext)
    // console.log(activeUser)

    let navigate = useNavigate()

    useEffect(() => {
        return() => {
            setSearch(null)
            // console.log(`%cSEARCHING FOR : ${search}`, 'color:red; font-size:40px')
        }
    }, [])


    const home = () => {
        return (
          <header>
            <div className="top">
                <img src={activeUser?.image} alt="" className='avatar hover' onClick={() => setShowMenu(!showMenu)}/>
                <img src="https://cdna.artstation.com/p/assets/images/images/031/538/850/original/petro-kosariekov-portal-gun-rick-and-morty2-2.gif?1603902186" alt="logo" className='logo'/>
                <img src="" alt="" className='filler'/>
            </div>
          </header>
        )
    }

    const searchPage = () => {
        return (
            <header>
              <div className="top">
                <img src={activeUser?.image} alt="" className='avatar hover' onClick={() => setShowMenu(!showMenu)}/>
                <input type="text" placeholder='🔍 Search Twitter' onClick={() => navigate('/searching')}/>
                <p className='hover' onClick={() => handleSettingsClick('/search')}>⚙️</p>
              </div>
            </header>
          )
    }

    const searching = () => {
        return(
            <header>
                <input type="text" placeholder='🔍 Search' value={search}className='hover' autoFocus onChange={(e) => setSearch(e.target.value)}/>
                <p className='grey hover' onClick={() => navigate('/search')}>Cancel</p>
            </header>
        )
    }

    const communities = () => {
        return (
            <header>
                <div className="top">
                    <img src={activeUser?.image} alt="" className='avatar hover' onClick={() => setShowMenu(!showMenu)}/>
                    <h3>Communities</h3>
                    <div className="right">
                        <p className='hover'>🔍</p>
                        <p className='hover'>🧑‍🤝‍🧑</p>
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
                <img src={activeUser?.image} alt="" className='avatar hover' onClick={() => setShowMenu(!showMenu)}/>
                <h3>Notifications</h3>
                    <p className='gear hover' onClick={() => handleSettingsClick('/notifications')}>⚙️</p>
            </header>
        )
    }
    
    const dms = () => {
        return (
            <header>
              <div className="top">
                <img src={activeUser?.image} alt="" className='avatar hover' onClick={() => setShowMenu(!showMenu)}/>
                <h3>Messages</h3>
                    <p className='gear hover' onClick={() => handleSettingsClick('/messages')}>⚙️</p>
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
                    <p className="back icon hover" onClick={() => navigate(-1)}>⬅️</p>
                    <img src={clickedMessage.image} alt="" className='avatar' onClick={() => navigate(`/profile/${clickedMessage?.username}`)}/>
                    <p className='info icon hover' onClick={() => setAllMessages([])}>🗑️</p>
                    {/* onClick={() => navigate('/settings')} */}
                </div>
                <div className="bottom">
                    <h4>{clickedMessage.firstName} {clickedMessage.lastName}</h4>
                </div>
            </header>
        )
    }

    const tweet = () => {
        return (
            <header>
                <p className="back hover" onClick={() => navigate(-1)}>⬅️</p>
                <h3>Tweet</h3>
                <p className='invisible'>⬅️</p>
            </header>
        )
    }


    if( parent === "home" ) return home()
    if( parent === "tweet" ) return tweet()
    if( parent === "search" ) return searchPage()
    if( parent === "searching" ) return searching()
    if( parent === "communities" ) return communities()
    if( parent === "notifs" ) return notifs()
    if( parent === "dms" ) return dms()
    if( parent === "message" ) return message()
}

export default Header
