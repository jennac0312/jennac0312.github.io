import React from 'react'
import FeedItem from './FeedItem'

const Feed = () => {

    let array = [1,2,3,4,5]
  return (
    <div className='feedContainer'>
        { array.map((element, index) => {
            return <FeedItem element={element} key={index}/>
        }) }
    </div>
  )
}

export default Feed
