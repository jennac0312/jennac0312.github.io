import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../contexts/app_context';

const Loading = () => {

  let { setIsLoading } = useContext(AppContext)
  const navigate = useNavigate()

    useEffect(() => {
      setTimeout(() => {
        navigate('/home')
        setIsLoading(false)
      }, 1800);
    }, [])
    
  return (
    <div className='loadingPage'>
        <img src="https://i.imgur.com/v3vVIEh.gif" alt="" />
    </div>
  )
}

export default Loading
