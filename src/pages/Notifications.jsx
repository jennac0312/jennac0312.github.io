import React, { useContext, useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Menu from '../components/Menu'
import { AppContext } from '../contexts/app_context'

const Notifications = () => {

  let { showMenu } = useContext(AppContext)
  const [ count, setCount ] = useState(0)

  return (
    <div className='notificationsPage'>

    { showMenu && <Menu parent="/notifications"/> }

      <div>
      <Header parent="notifs" />

      <main>
        <div className="tabs">
          <p onClick={() => setCount(0)} className={count === 0 && 'underline'}>All</p>
          <p onClick={() => setCount(1)} className={count === 1 && 'underline'}>Verified</p>
          <p onClick={() => setCount(2)} className={count === 2 && 'underline'}>Mentions</p>
        </div>
        <div className='noNotifs'>
          <p className="bold">Sorry, nothing to see here — yet</p>
          <p className="grey">Likes, mentions, reposts and a whole lot more... eventually </p>
          <img src="https://cdn-images-1.medium.com/max/688/1*82D2cg8Gpe9CVISaph6RPg.gif" alt="" className="gif" />
        </div>

      </main>

      <Footer />
    </div>

    </div>
  )
}

export default Notifications
