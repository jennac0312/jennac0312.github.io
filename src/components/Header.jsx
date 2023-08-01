import React, { useContext, useState } from 'react'
import { AppContext } from '../contexts/app_context'

const Header = ( {parent} ) => {

    let { setShowMenu } = useContext(AppContext)

    const [ count, setCount ] = useState(0)

    const home = () => {
        return (
          <header>
            <div className="top">
                <img src="" alt="" srcset="" className='avatar' onClick={() => setShowMenu(true)}/>
                <img src="https://cdna.artstation.com/p/assets/images/images/031/538/850/original/petro-kosariekov-portal-gun-rick-and-morty2-2.gif?1603902186" alt="logo" srcset="" className='logo'/>
            </div>
            <div className="bottom">
                <p onClick={() => setCount(0)} className={count === 0 && 'underline'}>For You</p>
                <p onClick={() => setCount(1)} className={count === 1 && 'underline'}>Following</p>
            </div>
          </header>
        )
    }


    if( parent == "home" ) return home()
}

export default Header