import React, { useContext, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { AppContext } from '../contexts/app_context'
import { useNavigate } from 'react-router-dom'

const Searching = () => {

    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    let { search, setSearch, searchResults, setClickedProfile, recentSearched, setRecentSearched } = useContext(AppContext) 

    let navigate = useNavigate()

    const handleClick = (profile) => {
        console.log('RECENT SEARCHED',recentSearched)
        setRecentSearched([...recentSearched, profile]) //delayed :(
        setClickedProfile(profile)
        navigate(`/profile/${profile?.username}`)
    }

    useEffect(() => {

    }, [])

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
            { recentSearched?.map((search, index) => {
                return(
                    <div className="small" key={index}>
                        <img src={search.image} alt="" />
                        <p>{search.firstName}</p>
                        <p className='grey small username bold'>@{search.username}</p>
                    </div>
                )
            })}
        </div>

        <div className="searches">
            { searchResults.map((result) => {
                return (
                    <div className="result" onClick={() => handleClick(result)}>
                        <img src={result.image} alt="" className='avatar' />
                        <div className="right">
                            <p className="bold name">{result.firstName} {result.lastName}</p>
                            <p className="grey small username bold">@{result.username}</p>
                        </div>
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

export default Searching
