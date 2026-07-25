import React from 'react'
import { useState } from 'react'

const App = () => {

  const [num, setnum] = useState(0)
  const btnClick =()=>{
    setnum(num+1)
  }


  const [nums, setnums] = useState({user:'Aditya' , age:22})
  const profile =()=>{
    const newNum = {...nums};
    // setnums({user:'Bob', age:25}) //Console o/p was aditya then Bob
    newNum.user="Bob"
    newNum.age=26;
    setnums(newNum);
    console.log(newNum);
  }



  const [first, setfirst] = useState([10,20,30])

  const arraybtn = ()=>{
    const newarr=[...first];
    newarr.push(58);
    console.log(newarr);
    setfirst(newarr);
    
  }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={btnClick}>Click</button>

      
      <h1>{nums.user} {nums.age}</h1>
      <button onClick={profile}>Profile</button>


      <h1>{first}</h1>
      <button onClick={arraybtn}>Array</button>
    </div>
  )
}

export default App
