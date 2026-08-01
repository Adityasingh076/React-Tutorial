import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
    const nav = useNavigate()     

    const btnClicked =()=>{
        nav('/')
    }

  return (
    <div>
        <button className='btn' onClick={btnClicked}>Return to Home</button>
      <h1>About page</h1>
    </div>
  )
}

export default About
