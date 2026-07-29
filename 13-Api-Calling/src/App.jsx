import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const App = () => {
async function getData(){
  const response =await fetch('https://jsonplaceholder.typicode.com/todos/1')
  const data = await response.json()
  console.log(data)
}


const [data, setdata] = useState([])
const Data = async()=>{
  const responses = await axios.get('https://jsonplaceholder.typicode.com/users')
  setdata(responses.data)
}


  return (
    <div>
      <button onClick={getData}>View</button>
      <button onClick={Data}>Get Data</button>
      <div>
        {data.map(function(elem , idx){
         return <h3>Hello {idx}</h3>
        })}
      </div>
    </div>
  )
}

export default App