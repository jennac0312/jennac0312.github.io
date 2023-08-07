import React, { useContext, useEffect } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../contexts/app_context'
import Menu from '../components/Menu'

const DMs = () => {

  let { setClickedMessage, showMenu, setCreateTweet, allMessages } = useContext(AppContext)
  const navigate = useNavigate()

  console.log('ALL MESSAGES', allMessages)
  
    //  get all unique conversations
    let dmIds = []
    allMessages?.forEach((message) => dmIds.push(message.dmId))
    dmIds = ( Array.from(new Set( dmIds )) )
    console.log(dmIds)

  const handleClick = (clicked, location) => {
    console.log('CLICKED MESSAGE:', clicked)
    console.log('NAVIGATE TO:', location)
    setClickedMessage(clicked)
    navigate(location)
  }

  useEffect(() => {
    setCreateTweet(true)

    return() => {
      setCreateTweet(false)
    }
  }, [])


  return (
    <div className='dmPage'>
      { showMenu && <Menu parent="/messages"/> }
      <div>
      <Header parent="dms" />
        {/* <hr /> */}
      <main>
        { dmIds. length > 0 ? 
         dmIds.map((dm, index) => {
          // sort dms
          let conversation = []
          allMessages.forEach((message) => message.dmId === dm && conversation.push(message))
          console.log(conversation)
          let recipient = {}
          conversation.forEach((message) => message.user.id === dm ? recipient = message.user : null )
          console.log(recipient)

          return (
            <div className="message hover" key={index} 
            onClick={() => handleClick(recipient,`/messages/${recipient.username}`)}>
              
              <img src={recipient.image} alt="" className='avatar'/>
              <div className="stack">
                <div className="top">
                  <p className='name small'>{recipient.firstName} {recipient.lastName}</p>
                  <p className='grey small dot'>•</p>
                  <p className='username grey small'>@{recipient.username} </p>
                  {/* <p className='grey small'>date</p> */}
                </div>
                <p className='grey small'>{conversation[conversation.length - 1].message}</p>
              </div>
            </div>
          )
        }) 
        :
        <div className="noDms">
          <p className="bold"><span className='username'></span> You haven't recieved any DMs yet</p>
          <p className="grey">Start a conversation</p>
          <img src="https://cdn-images-1.medium.com/max/688/1*82D2cg8Gpe9CVISaph6RPg.gif" alt="" className="gif" />
        </div>
        }
      </main>
      <Footer />
    </div>
    </div>
  )
}

export default DMs
