import React, { useContext, useState } from 'react'
import { AppContext } from '../contexts/app_context'

const Header = ( {parent} ) => {

    let { showMenu, setShowMenu, activeUser } = useContext(AppContext)
    // console.log(activeUser)

    const [ count, setCount ] = useState(0)

    const home = () => {
        return (
          <header>
            <div className="top">
                <img src={activeUser?.avatar} alt="" className='avatar' onClick={() => setShowMenu(!showMenu)}/>
                <img src="https://cdna.artstation.com/p/assets/images/images/031/538/850/original/petro-kosariekov-portal-gun-rick-and-morty2-2.gif?1603902186" alt="logo" srcset="" className='logo'/>
                <img src="" alt="" className='filler'/>
            </div>
          </header>
        )
    }

    const search = () => {
        return (
            <header>
              <div className="top">
                <img src={activeUser?.avatar} alt="" className='avatar' onClick={() => setShowMenu(!showMenu)}/>
                <input type="text" placeholder='🔍 Search Twitter' />
                <p>⚙️</p>
              </div>
            </header>
          )
    }


    if( parent === "home" ) return home()
    if( parent === "search" ) return search()
}

export default Header
