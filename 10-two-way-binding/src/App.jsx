import React from 'react'
import { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')
  const submitHandler=(e)=>{
    e.preventDefault()
    console.log("Form Submitted by" , title)

    setTitle('') //This will clear the input field after form submission
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <input type="text" 
        placeholder='Enter your name'
        value={title}
        onChange={(e)=>{
          setTitle(e.target.value)
        }}
        />
        <button>Submit</button>
        <p>Your name: {title}</p>
      </form>
    </div>
  )
}
export default App
