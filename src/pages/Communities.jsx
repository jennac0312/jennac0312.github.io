import React, { useContext } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { AppContext } from '../contexts/app_context'
import Menu from '../components/Menu'

const Communities = () => {

    let { showMenu, spacePics } = useContext(AppContext)
    const arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  return (
    <div className='communities'>

    { showMenu && <Menu parent="/communities"/> }

        <div>
            <Header parent="communities" />
            <main>
                <div className="">
                    { spacePics.toReversed().map((space, index) => {
                        return (
                            <div className="community" key={index} >
                                <div className="left">
                                    <img src={space.url} alt="" className='space'/>

                                </div>
                                <div className="right">
                                    <p className='bold'>Element {space.title} Title</p>
                                    <p className="grey">{ (Math.random() * 100).toFixed(1) }K Members</p>
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

export default Communities
