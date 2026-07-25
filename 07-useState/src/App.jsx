import React, { useState } from 'react'

const App = () => {

  var a =20;
  function ChangeA(){
    console.log(a);
    a =30;
    console.log(a)
  }


//Counter useState and Functions
  const [nums, setnums] = useState(0)
  function insc(){
    setnums(nums + 1)
  }
  function desc(){
    setnums(nums-1)
  }

  //Now we use UseState hook to change the value of a and re-render the component
  const [num, setA] = useState(0)
  const [username, changename] = useState("Gorge")
  
  //This function will change the value of num to 30 and re-render the component
  var ChangeNum = () => {   
    setA(30); //Value assign num is for ReadOnly and setA is for write only...
    changename("BOB")
  }




  return (
    <div>
      <h1>Value of a is {a}</h1>
      <button onClick={ChangeA}>Click</button>

      <h1>Value of num is {num}</h1>
      <button onClick={ChangeNum}>click me</button>

      <h1>Value of userName is {username}</h1>
      <button onClick={ChangeNum}>Change Name</button>

      <h1 id="h1">{nums}</h1>
      <button onClick={insc} className="btn">Increase</button>
      <button onClick={desc} className="btn">Decrease</button>
    </div>
  )
}

export default App
