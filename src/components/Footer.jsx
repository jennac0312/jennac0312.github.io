import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
        <Link to="/home">
            <p>🏠</p>
        </Link>

        <Link to="/search">
            <p>🔍</p>
        </Link>

        <Link to="/communities">
            <p>🫂</p>
        </Link>

        <Link to='/notifications'>
            <p>🔔</p>
        </Link>

        <Link to="/messages">
            <p className='mail'>✉️</p>
        </Link>
    </footer>
  )
}

export default Footer
