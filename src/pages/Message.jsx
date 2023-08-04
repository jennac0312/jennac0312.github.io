import React, { useContext } from 'react'
import { AppContext } from '../contexts/app_context'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Message = () => {

    let { clickedMessage, clickedProfile } = useContext(AppContext)

    let array = [1,2,3,4,5,6,7,8,9,10]

    return (
        <div className='message'>
          <div>
          <Header parent="message" />
            <hr />
          <main>

            { array.map((element, index) => {
                return (
                    <div className="bubble" key={index}>
                        <p>message {element}</p>
                    </div>
                )
            }) }
    
          </main>

          <input type="text" placeholder='Start a message' />
          <Footer />
        </div>
        </div>
      )
}

export default Message
