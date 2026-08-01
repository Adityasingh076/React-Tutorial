import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <div>
        <div className='p-div'>
            <Link to='/product/Men'>Men</Link>
            <Link to='/product/Women'>Women</Link>
        </div>
      {/* <h1>Product page</h1> */}
      <Outlet/>
    </div>
  )
}

export default Product
