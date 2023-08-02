import React, { useContext, useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Menu from '../components/Menu'
import { AppContext } from '../contexts/app_context'

const Search = () => {

  let { showMenu } = useContext(AppContext)

  const [ count, setCount ] = useState(0)
  const tempArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

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

      <div className="video">
        <h3>random video</h3>
        <p className='video-text'>Text in bottom left corner</p>
      </div>

      <div className="trending">
        <div className="topic">
          <div className="top">
            <p className='grey small bold'>Trending in Celebrities</p>
            <span className="dots">⋯</span>
          </div>
          <p className="bold">Kylie</p>
          <p className="grey small">13.1k Tweets</p>
        </div>

        <div className="topic">
          <div className="top">
            <p className='grey small bold'>Trending</p>
            <span className="dots">⋯</span>
          </div>
          <p className="bold">Black Men</p>
          <p className="grey small">27.7k Tweets</p>
        </div>

        <div className="topic">

          <div className="top">
            <p className='grey small bold'>Trending in Political figures</p>
            <span className="dots">⋯</span>
          </div>

          <p className="bold">YOU WILL NEVER BE PRESIDENT</p>
          <p className="grey small">14.8k Tweets</p>
        </div>
      </div>

      <div className="stories">
        <h4>Videos for you</h4>
        <p className='small grey'>check out these popular and trending videos for you</p>

        <div className="storiesContainer">
          { tempArray.map((element, index) => {
            return (
              <div className="story" key={index}>
                <p>{element}▶️</p>
              </div>
            )
          }) }
        </div>
      </div>

          {/* TEMP ------------------------------------------------------------------ */}
      <div className="trending">
        <div className="topic">
          <div className="top">
            <p className='grey small bold'>Trending in Celebrities</p>
            <span className="dots">⋯</span>
          </div>
          <p className="bold">Kylie</p>
          <p className="grey small">13.1k Tweets</p>
        </div>

        <div className="topic">
          <div className="top">
            <p className='grey small bold'>Trending</p>
            <span className="dots">⋯</span>
          </div>
          <p className="bold">Black Men</p>
          <p className="grey small">27.7k Tweets</p>
        </div>

        <div className="topic">

          <div className="top">
            <p className='grey small bold'>Trending in Political figures</p>
            <span className="dots">⋯</span>
          </div>

          <p className="bold">YOU WILL NEVER BE PRESIDENT</p>
          <p className="grey small">14.8k Tweets</p>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Search
