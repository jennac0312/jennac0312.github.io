import React, { useContext } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../contexts/app_context'
import Menu from '../components/Menu'

const DMs = () => {

  let { setClickedMessage, showMenu } = useContext(AppContext)
  const navigate = useNavigate()

  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  const handleClick = (clicked, location) => {
    console.log('CLICKED MESSAGE:', clicked)
    console.log('NAVIGATE TO:', location)
    setClickedMessage(clicked)
    navigate(location)
  }

  return (
    <div className='dmPage'>
      { showMenu && <Menu parent="/messages"/> }
      <div>
      <Header parent="dms" />
        <hr />
      <main>

        { array.map((element, index) => {
          return (
            <div className="message" key={index} onClick={() => handleClick(element,`/messages/${element}`)}>
              <img src="" alt="" className=''/>
              <div className="stack">
                <div className="top">
                  <p className='name small'>Name </p>
                  <p className='username grey small'>@username </p>
                  <p className='grey small dot'>•</p>
                  <p className='grey small'>date</p>
                </div>
                <p className='grey small'>message {element}</p>
              </div>
            </div>
          )
        }) }

      </main>
      <Footer />
    </div>
    </div>
  )
}

export default DMs
