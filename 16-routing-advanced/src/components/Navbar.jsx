import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='div'>
      <h2>Coffee With Code</h2>
      <div className='nav-div'> 
          <Link to='/'>Home</Link>
          <Link to= '/about'>About us</Link>
          <Link to='/contact'>Contact</Link>
          <Link to='/courses'>Courses</Link>
          <Link to='/product'>Product</Link>
          <Link to='/'></Link>
      </div>
    </div>
  )
}

export default Navbar
