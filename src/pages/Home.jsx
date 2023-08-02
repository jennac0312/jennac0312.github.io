import React, { useContext } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Feed from '../components/Feed'
import Circle from '../components/Circle'
import { AppContext } from '../contexts/app_context'
import Menu from '../components/Menu'

const Home = () => {

  let { showMenu } = useContext(AppContext)
  console.log(showMenu)

  return (
    <div className='homePage'>

      { showMenu && <Menu parent="/home"/> }

      <div className='main'>
        <Header parent="home"/>
        { !showMenu && <Circle symbol="plus"/>}
        <Feed />
        <Footer />
      </div>

    </div>
  )
}

export default Home
