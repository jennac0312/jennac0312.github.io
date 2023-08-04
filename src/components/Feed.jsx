import React, { useContext } from 'react'
import FeedItem from './FeedItem'
import { AppContext } from '../contexts/app_context'

const Feed = () => {

    let { users, allPosts } = useContext(AppContext)

    let array = [1,2,3,4,5]

  return (
    <div className='feedContainer'>
        { allPosts?.map((post, index) => {
            let user = users.filter((user) => user?.id === post?.userId)
            console.log('USER', user[0]?.id)
            console.log('POST ID', post?.userId)
            return <FeedItem post={post} user={user[0]} key={index}/>
        }) }
    </div>
  )
}

export default Feed
