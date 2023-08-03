import React, { useContext } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { AppContext } from '../contexts/app_context'
import Menu from '../components/Menu'

const Communities = () => {

    let { showMenu } = useContext(AppContext)
    const arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  return (
    <div className='communities'>

    { showMenu && <Menu parent="/communities"/> }

        <div>
            <Header parent="communities" />
            <main>
                <div className="">
                    { arr.map((element, index) => {
                        return (
                            <div className="community" key={index} >
                                <img src="" alt="" />
                                <div className="right">
                                    <p className='bold'>Element {element} Title</p>
                                    <p className="grey">45.5k Members</p>
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
