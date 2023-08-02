import React, { useContext, useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Menu from '../components/Menu'
import { AppContext } from '../contexts/app_context'

const Search = () => {

  let { showMenu } = useContext(AppContext)

  const [ count, setCount ] = useState(0)
  return (
    
    <div className='searchPage'>

      { showMenu && <Menu parent="/search"/> }
    
      <Header parent="search"/>
      <div className="tabs">
        <p onClick={() => setCount(0)} className={count === 0 && 'underline'}>For you</p>
        <p onClick={() => setCount(1)} className={count === 1 && 'underline'}>Trending</p>
        <p onClick={() => setCount(2)} className={count === 2 && 'underline'}>News</p>
        <p onClick={() => setCount(3)} className={count === 3 && 'underline'}>Sports</p>
        <p onClick={() => setCount(4)} className={count === 4 && 'underline'}>Entertainment</p>
      </div>
      <Footer />
    </div>
  )
}

export default Search
