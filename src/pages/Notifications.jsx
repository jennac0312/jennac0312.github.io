import React, { useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Notifications = () => {

  const [ count, setCount ] = useState(0)

  return (
    <div className='notificationsPage'>
      <div>
      <Header parent="notifs" />

      <main>
        <div className="tabs">
          <p onClick={() => setCount(0)} className={count === 0 && 'underline'}>All</p>
          <p onClick={() => setCount(1)} className={count === 1 && 'underline'}>Verified</p>
          <p onClick={() => setCount(2)} className={count === 2 && 'underline'}>Mentions</p>
        </div>
      </main>

      <Footer />
    </div>

    </div>
  )
}

export default Notifications
