import React, { useEffect, useState } from 'react'

const App = () => {
  const [num, setnum] = useState(0)
  const [num2, setnum2] = useState(100)
  useEffect(function(){
    console.log("UseEffect is running...");
     },[num]) //[]It is a dependency 


  return (
    <div>
      <h1>Value of num is {num}</h1>
      <h1>Value of num2 is {num2}</h1>
      <button onClick={()=>{
        setnum(num+1)
      }} onDoubleClick={()=>{
        setnum2(num2+1)
      }} >Click</button>
    </div>
  )
}

export default App
