import React, { useContext } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { AppContext } from '../contexts/app_context'

const Searching = () => {

    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    let { search, setSearch } = useContext(AppContext) 

  return (
    <div className='searchingPage'>
      <div>
      <Header parent="searching" />
      <main>
        <div className="top">
            <h3>Recent searches</h3>
            <p>✖️</p>
        </div>
        <div className="recents">
            { array.map((element, index) => {
                return(
                    <div className="" key={index}>
                        <img src="" alt="" />
                        <p>name</p>
                        <p className='grey small username'>@{element}</p>
                    </div>
                )
            })}
        </div>
      </main>
      <Footer />
    </div>
    </div>
  )
}

export default Searching
