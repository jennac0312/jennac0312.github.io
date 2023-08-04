import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../contexts/app_context'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Message = () => {

    let { clickedMessage, setClickedProfile ,clickedProfile, activeUser } = useContext(AppContext)

    let array = [1,2,3,4,5,6,7,8,9,10]

    const [ allMessages, setAllMessages ] = useState([])
    const [ message, setMessage ] = useState( { message: '', user: activeUser } )

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
            console.log(message)
        }

        // console.log('ALL MESSAGES', allMessages)
    }

    return (
        <div className='message'>
          <div>
          <Header parent="message" />
            <hr />
          <main>

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
