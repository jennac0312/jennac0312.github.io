import React, { useContext } from 'react'
import FeedItem from './FeedItem'
import { AppContext } from '../contexts/app_context'

const Feed = ( {parent} ) => {

    let { users, allPosts, profilePosts, clickedProfile, userTweets } = useContext(AppContext)

    let array = [1,2,3,4,5]
    console.log('ALL POSTS', allPosts)
    console.log('USER POSTS', userTweets)

    const home = () => {
        return (
            <div className='feedContainer'>
                { userTweets?.toReversed().map((post, index) => {
                    let user = users.filter((user) => user?.id === post?.userId)
                    // console.log('USER', user[0]?.id)
                    // console.log('POST ID', post?.userId)
                    return <FeedItem post={post} user={user[0]} key={index}/>
                }) }

                { allPosts?.toReversed().map((post, index) => {
                    let user = users.filter((user) => user?.id === post?.userId)
                    // console.log('USER', user[0]?.id)
                    // console.log('POST ID', post?.userId)
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
        return profilePosts.length ? 
            (
            <div className='feedContainer'>
                { profilePosts?.map((post, index) => {
                    // let user = users.filter((user) => user?.id === post?.userId)
                    // console.log('USER', user[0]?.id)
                    // console.log('POST ID', post?.userId)
                    return <FeedItem post={post} user={clickedProfile} key={index}/>
                }) }
            </div>
            ) 
            : 
            (
                <div className='noTweets'>
                    <p className="bold"><span className='username'>@{clickedProfile.username}</span> hasn't posted tweets</p>
                    <p className="grey">Once they do, those posts will show up here.</p>
                    <img src="https://cdn-images-1.medium.com/max/688/1*82D2cg8Gpe9CVISaph6RPg.gif" alt="" className="gif" />
                </div>
            )
    }

    if(parent === "home") return home()
    if(parent === "profile") return profile()
    if(parent === clickedProfile) return otherProfile()
  
}

export default Feed
