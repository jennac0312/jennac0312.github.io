import React, { useContext } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Feed from '../components/Feed'
import Circle from '../components/Circle'

const Home = () => {

  return (
    <div className='homePage'>
      <Header parent="home"/>
      <Circle symbol="plus"/>
      <Feed />
      <Footer />
    </div>
  )
}

export default Home
