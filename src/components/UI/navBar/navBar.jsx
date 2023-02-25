import React from 'react'
import { Link } from 'react-router-dom'

const navBar = () => {
  return (
    <nav>
        <Link to={'/about'}>About</Link>
        <Link to={'/posts'}>Post</Link>
        <Link to={'/student'}>Sudent Page</Link>
      </nav>
  )
}


export default navBar