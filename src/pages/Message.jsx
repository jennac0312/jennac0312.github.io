import React, { useContext, useEffect, useRef, useState } from 'react'
import { AppContext } from '../contexts/app_context'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'

const Message = () => {

    let { clickedMessage, setClickedProfile, clickedProfile, activeUser, fetchReply, reply, allMessages, setAllMessages, setCreateTweet } = useContext(AppContext)

    console.log(clickedMessage)

    // need to filter thru allMessages to find this conversation
    let currentMessages = []
    allMessages.filter((message) => { 
        message.dmId === clickedMessage.id && currentMessages.push(message)
    })
    console.log('CURRENT MESSAGE THREAD',currentMessages)

    // const [ allMessages, setAllMessages ] = useState([])
    const [ message, setMessage ] = useState( { message: '', user: activeUser, dmId: clickedMessage.id } )
    const [ isTyping, setIsTyping ] = useState(false)
    console.log('ALL MESSAGESSSSSS', allMessages)
    
    const ref = useRef(null)

        if(ref.current){
            console.log(ref.current.scrollTop)
            console.log(ref.current.scrollBottom)
            //scroll height is the height of the container 670px
            // scroll top is where top of container starts (scrolls to)

            // ref.current.scrollTop = ref.current.scrollHeight
            ref.current.scrollTo(0, ref.current.scrollHeight+100)
        }
    
    useEffect(() => {
        // console.log('MESSAGE', message.message)
        console.log(message)
        return() => {
            // setMessage("")
        }
    }, [message])

    const handleEnter = (e) => {
        // e.preventDefault()
        console.log(e.timeStamp)
        if( message === "" ) return
        if(e.key === "Enter") {
            console.log('sending message')
            setAllMessages([... allMessages, message])
            setMessage("")
            e.target.value = ""
            // console.log(message)
            console.log('ACTIVE USERRRRRRRRRRRR',activeUser)
            if( currentMessages[currentMessages.length - 1]?.user?.id === activeUser.id ) return //dont speak unless spoken to lol

            // for delay feeling
            setTimeout(() => {
                setIsTyping(true)
            }, 1250);

            fetchReply()
            // console.log('REPLY', reply)
            // console.log('ALL MESSAGES',allMessages)
        } 

    }

    //when reply is updated add to all messages
    useEffect(() => {
        setTimeout(() => {
            setAllMessages([... allMessages, reply])
            setIsTyping(false)
        }, 5000);

        return() => {
            clearInterval()
        }
    }, [reply])

    useEffect(() => {
        setCreateTweet(true)
        return() => {
            setCreateTweet(false)
        }
    }, [])
    
    return (
        <div className='message'>
          <div>
          <Header parent="message" setAllMessages={setAllMessages}/>
            {/* <hr /> */}
          <main ref={ref}>

            {/* { array.map((element, index) => {
                return (
                    <div className="bubble" key={index}>
                        <p>message {element}</p>
                    </div>
                )
            }) } */}

            { currentMessages?.map((message, index) => {
                return (
                    <div className="bubble" id={message.user === activeUser ? 'self' : 'other' } key={index}>
                        <p>{message.message}</p>
                    </div>
                )
            }) }

          {/* reply bubbles */}
          { isTyping && 
              <div className="bubble reply" id='other'>
                  <p>...</p>
              </div>
          }
          
          {/* <p className="ref">focus on meeeee</p> */}
          {window.onchange = () => {
            // oh this fires when whole page changes.. clicked on searching hmmm
            //   {document?.querySelector('.ref')?.focus()}
            //   document?.querySelector('.reply')?.focus()
            console.log('window changing')
            //   let reply = document?.querySelector('.reply')
            //   document?.querySelector('.reply')?.scrollIntoView()
            //   console.log('REPLY TOPPPPPP', reply?.top)
          }}

          </main>

          <input 
            type="text" 
            placeholder='Start a message'
            autoFocus
            value={message.message} 
            onChange={(e) => setMessage({message: e.target.value, user:activeUser, dmId: clickedMessage.id})}
            onSubmit={(e) =>console.log(e.target.value)} 
            onKeyDown={(e) => handleEnter(e)}
          />

          <Footer />
        </div>
        </div>
      )
}

export default Message
