import React, { useContext, useEffect, useRef, useState } from 'react'
import { AppContext } from '../contexts/app_context'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Message = () => {

    let { clickedMessage, setClickedProfile, clickedProfile, activeUser, fetchReply, reply } = useContext(AppContext)

    let array = [1,2,3,4,5,6,7,8,9,10]

    console.log(clickedMessage)

    const [ allMessages, setAllMessages ] = useState([])
    const [ message, setMessage ] = useState( { message: '', user: activeUser } )
    const [ isTyping, setIsTyping ] = useState(false)
    
        // focus on last child with class... auto scroll essentially
        // let lastBubble = document.querySelector('.bubble:last-child')
        // let lastReply = document.querySelector('#self:last-child')
        // console.log('last reply:', lastReply)
        // lastReply?.setAttribute('ref','{ref}')
        let followeEl = document.querySelector('.ref')
        const ref = useRef(null)

        if(ref.current){
            ref.current.scrollTop = ref.current.scrollHeight
        }
    
    useEffect(() => {
        // console.log('MESSAGE', message.message)
        console.log(message)
        return() => {
            // setMessage("")
        }
    }, [message])

    const handleEnter = (e) => {
        if( message === "" ) return
        if(e.key === "Enter") {
            console.log('sending message')
            setAllMessages([... allMessages, message])
            // console.log('OG CLICKED PROFILE', clickedProfile)
            // setClickedProfile({...setClickedProfile, messages: allMessages})
            // setClickedProfile( clickedProfile.messages = allMessages )
            // console.log('CLICKED PROFILE',clickedProfile)
            setMessage("")
            e.target.value = ""
            // console.log(message)

            if( allMessages.length  = 0 ) return //dont speak unless spoken to lol

            // for delay feeling
            setTimeout(() => {
                setIsTyping(true)
            }, 2000);

            fetchReply()
            // console.log('REPLY', reply)
            // console.log('ALL MESSAGES',allMessages)
        } 
        // console.log('ALL MESSAGES', allMessages)
        // ref.current?.scrollIntoView( { behavior: 'smooth'} )
        // console.log('REFFFFFFFFFFFFFFFFFFF',ref.current)
        // followeEl.scrollIntoView()
        // console.log('POSITION' ,followeEl.clientTop)
        // console.log('POSITION' ,followeEl.clientTop)
        // console.log('POSITION' ,followeEl.clientLeft)

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
    
    return (
        <div className='message'>
          <div>
          <Header parent="message" setAllMessages={setAllMessages}/>
            <hr />
          <main ref={ref}>

            {/* { array.map((element, index) => {
                return (
                    <div className="bubble" key={index}>
                        <p>message {element}</p>
                    </div>
                )
            }) } */}

            { allMessages?.map((message, index) => {
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
    
          <p className="ref">ref</p>
          </main>

          <input 
            type="text" 
            placeholder='Start a message' 
            value={message.message} 
            onChange={(e) => setMessage({message: e.target.value, user:activeUser})}
            onSubmit={(e) =>console.log(e.target.value)} 
            onKeyDown={(e) => handleEnter(e)}
          />

          <Footer />
        </div>
        </div>
      )
}

export default Message
