import React, { useContext, useEffect } from 'react'
import { AppContext } from '../contexts/app_context'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Feed from '../components/Feed'
import Footer from '../components/Footer'

const OtherProfile = () => {

    let { clickedProfile, profileRender, setClickedMessage, getRandomSpacePics } = useContext(AppContext)
    // console.log('CLICKED PROFILE', clickedProfile)

    const [ count, setCount ] = useState(0)
    const navigate = useNavigate()
    const [ follow, setFollow ] = useState(false)
  
    // console.log('PROFILE RENDERER: ', profileRender)

    let banner = getRandomSpacePics(2)

    useEffect(() => {
        // console.log(follow)
    }, [follow])
  
    const handleClick = () => {
      setFollow(() => !follow)
    //   console.log('NOW', follow)
      follow ? clickedProfile.height-- : clickedProfile.height++
    }

    const handleMessageClick = (profile, to) => {
        console.log('PROFILE MESSAGE CLICKED',profile)
        console.log('GO TO:', to)
        setClickedMessage(profile)
        // console.log(clickedProfile)
        navigate(to)
    }

    const yesFollowing = () => {
        // console.log(follow)
        return (
            <div className="right">
                <div>
                    <p className="bell hover">🔔</p>
                </div>
                <div onClick={() => handleMessageClick(clickedProfile,`/messages/${clickedProfile.username}`)}>
                    <p className="message hover">✉️</p>
                </div>
                <button className="followingButton bold hover" onClick={() => handleClick()}>Following</button>
              </div>
        )
    }

    const notFollowing = () => {
        // console.log(follow)
        return (
            <div className="right">
                <div onClick={() => handleMessageClick(clickedProfile,`/messages/${clickedProfile.username}`)}>
                    <p className="message hover">✉️</p>
                </div>
                <button className="followButton bold" onClick={() => handleClick()}>Follow</button>
              </div>
        )
    }
  
    return (
      <>
        <div className='otherProfilePage'>
          <header style={{ backgroundImage: `url(${banner[0]?.url})`}}>
            {/* background image */}
            <div className="left">
              <p className="back hover" onClick={() => navigate(-1) }>↩️</p>
            </div>
  
            <div className="right">
              <p className="search hover"></p>
              <p className="share hover"></p>
            </div>
          </header>
  
          <div className="otherProfileInfo">
            <div className="top">
              <img src={clickedProfile.image} alt="" className='avatar' onClick={() => navigate(`/profile/${clickedProfile.username}/avi`)} style={{ backgroundImage: `url(${banner[0]?.url})`}}/>
              { follow ? yesFollowing() : notFollowing() }
            </div>
  
            <p className='bold name'>{clickedProfile.firstName} {clickedProfile.lastName}</p>
            <p className='grey '>@{clickedProfile.username}</p>
            <p className="bio">{clickedProfile.company.title} in {clickedProfile.company.department}</p>
  
            <div className="bottom">
              <p className='location'><span>🌎 {clickedProfile.address.city}, {clickedProfile.address.state}</span> <span className="joined grey">🎈Born {clickedProfile.birthDate}</span></p>
            
              <div className="follow">
                <p><span className="bold">{Math.ceil(clickedProfile.weight)}</span> <span className="grey">Following</span></p>
                <p><span className="bold">{Math.ceil(clickedProfile.height)}</span> <span className="grey">Followers</span></p>
              </div>
  
              <div className="tabs">
                <p onClick={() => setCount(0)} className={count === 0 && 'underline'}>Tweets</p>
                <p onClick={() => setCount(1)} className={count === 1 && 'underline'}>Replies</p>
                <p onClick={() => setCount(3)} className={count === 3 && 'underline'}>Media</p>
                <p onClick={() => setCount(4)} className={count === 4 && 'underline'}>Likes</p>
              </div>
  
            </div>
          </div>
  
          <Feed parent={clickedProfile}/>
        </div>
        <Footer />
      </>
    )
}

export default OtherProfile
