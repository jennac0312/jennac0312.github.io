import React, { useContext } from 'react'
import FeedItem from './FeedItem'
import { AppContext } from '../contexts/app_context'

const Feed = ( {parent} ) => {

    let { users, allPosts, profilePosts, clickedProfile } = useContext(AppContext)

    let array = [1,2,3,4,5]

    const home = () => {
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

    const profile = () => {
        return (
            <div className='feedContainer'>
                { profilePosts?.map((post, index) => {
                    // let user = users.filter((user) => user?.id === post?.userId)
                    // console.log('USER', user[0]?.id)
                    // console.log('POST ID', post?.userId)
                    return <FeedItem post={post} user={clickedProfile} key={index}/>
                }) }
            </div>
          )
    }

    const otherProfile = () => {
        return (
            <div className='feedContainer'>
                { profilePosts?.map((post, index) => {
                    // let user = users.filter((user) => user?.id === post?.userId)
                    // console.log('USER', user[0]?.id)
                    // console.log('POST ID', post?.userId)
                    return <FeedItem post={post} user={clickedProfile} key={index}/>
                }) }
            </div>
          )
    }

    if(parent === "home") return home()
    if(parent === "profile") return profile()
    if(parent === clickedProfile) return otherProfile()
  
}

export default Feed
