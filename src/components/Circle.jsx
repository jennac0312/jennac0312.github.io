import React, { useCallback, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../contexts/app_context'

const Circle = ( {symbol} ) => {

    const navigate = useNavigate()

    let { setCreateTweet } = useContext(AppContext)

    const handleClick = () => {
        setCreateTweet(true)
        navigate(`/tweet`)
    }

    const plus = () => {
        return (
            <div className="circle hover" onClick={() => handleClick()}>
                <p className='small'>+</p>
            </div>
        )
    }

  if(symbol === "plus" ) return plus()
}

export default Circle
