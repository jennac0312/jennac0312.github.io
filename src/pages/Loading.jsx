import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Loading = () => {

  const navigate = useNavigate()

    useEffect(() => {
      setTimeout(() => {
        navigate('/home')
      }, 1800);
    }, [])
    
  return (
    <div className='loadingPage'>
        <img src="https://i.imgur.com/v3vVIEh.gif" alt="" />
    </div>
  )
}

export default Loading
