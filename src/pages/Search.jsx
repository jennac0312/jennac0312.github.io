import React, { useContext, useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Menu from '../components/Menu'
import { AppContext } from '../contexts/app_context'
import { useNavigate } from 'react-router-dom'

const Search = () => {

  let { showMenu, getRandomSpacePics, spacePics, setClickedStory, fetchNasa } = useContext(AppContext)

  const [ count, setCount ] = useState(0)
  const tempArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const navigate = useNavigate()

  let randomSpace = getRandomSpacePics(1)
  // let pic = randomSpace[0].hdurl
  // console.log(randomSpace)

  // let spacePics = getSpacePics(10)
  // console.log('SPACE PICCCCCCCCSSSSSSSSSS',spacePics)
  let firstSpace = []
  let secondSpace = []

  for(let i = 0; i < spacePics.length; i++){
    if(i < 4){
      firstSpace.push(spacePics[i])
    } else {
      secondSpace.push(spacePics[i])
    }
  }

  const handleClick = (what) => {
    navigate(`/story/${what.title.replaceAll(' ','')}`)
    setClickedStory(what)
  }



  return (
    
    <div className='searchPage'>

      { showMenu && <Menu parent="/search"/> }
  
      <div>
        <Header parent="search"/>
        <main>
          <div className="tabs">
            <p onClick={() => setCount(0)} className={count === 0 && 'underline'}>For you</p>
            <p onClick={() => setCount(1)} className={count === 1 && 'underline'}>Trending</p>
            <p onClick={() => setCount(2)} className={count === 2 && 'underline'}>News</p>
            <p onClick={() => setCount(3)} className={count === 3 && 'underline'}>Sports</p>
            <p onClick={() => setCount(4)} className={count === 4 && 'underline'}>Entertainment</p>
          </div>

          <div className="video" style={{ backgroundImage : `url(${randomSpace[0]?.hdurl})`}}>
            {/* <h3>random video</h3> */}
            <p className='video-text'>{randomSpace[0]?.title}</p>
            {/* <p className="explanation small">{randomSpace[0].explanation}</p> */}
          </div>

          <div className="trending">
            { firstSpace?.map((space) => {
              return (
                <div className="topic">
                  <div className="top">
                    <p className='grey small bold'>Trending in NASA</p>
                    <span className="dots">⋯</span>
                  </div>
                  <p className="bold small">{space.title}</p>
                  <p className="grey small">{ (Math.random() * 100 ).toFixed(1) }k Tweets</p>
                </div>
              )
            }) }
            {/* <div className="topic">
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
            </div> */}
          </div>

          <div className="stories">
            <h4>Videos for you</h4>
            <p className='small grey'>check out these popular and trending videos for you</p>

            <div className="storiesContainer">
              { spacePics.map((pic, index) => {
                return (
                  <div className="story" key={index} onClick={() => handleClick(pic)}>
                    <img src={pic.hdurl} alt="" className='space'/>
                    <p className='play hover'>▶️</p>
                  </div>
                )
              }) }
            </div>
          </div>

              {/* TEMP ------------------------------------------------------------------ */}
          <div className="trending">
          { secondSpace?.map((space) => {
              return (
                <div className="topic">
                  <div className="top">
                    <p className='grey small bold'>Trending in NASA</p>
                    <span className="dots">⋯</span>
                  </div>
                  <p className="bold small">{space.title}</p>
                  <p className="grey small">{ (Math.random() * 100 ).toFixed(1) }k Tweets</p>
                </div>
              )
            }) }
          </div>

        </main>
        <Footer />
      </div>
    </div>
  )
}

export default Search
