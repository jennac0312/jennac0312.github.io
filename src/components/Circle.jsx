import React from 'react'

const Circle = ( {symbol} ) => {

    const plus = () => {
        return (
            <div className="circle hover">
                <p>+</p>
            </div>
        )
    }

  if(symbol === "plus" ) return plus()
}

export default Circle
