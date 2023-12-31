import React, { useContext, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Feed from '../components/Feed'
import Circle from '../components/Circle'
import { AppContext } from '../contexts/app_context'
import Menu from '../components/Menu'

const Home = () => {

  let { showMenu, activeUser, users } = useContext(AppContext)
  // console.log(showMenu)
  // console.log(activeUser)

  const [ count, setCount ] = useState(0)

  return (
    <div className='homePage'>

      { showMenu && <Menu parent="/home"/> }

      <div style={{ opacity : showMenu ? '.3' : '1', backgroundColor: showMenu ? 'slategrey' : 'black'}}>
        <Header parent="home"/>

        <main>
          <div className="tabs">
                  <p onClick={() => setCount(0)} className={count === 0 && 'underline'}>For You</p>
                  <p onClick={() => setCount(1)} className={count === 1 && 'underline'}>Following</p>
          </div>
          <Feed parent="home"/>
        </main>

        <Footer />

      </div>
    </div>
  )
}

export default Home
