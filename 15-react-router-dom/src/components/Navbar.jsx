import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
     <div className='nav'>
        <h3>Code with Coffee</h3>
        <div>
          <Link to='/home'>Home</Link>
          <Link to= '/about'>About us</Link>
          <Link to='/contact'>Contact</Link>
          <Link to='/product'>Product</Link>
        </div>
      </div>
  )
}

export default Navbar
