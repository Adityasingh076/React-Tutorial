import React from 'react'

const App = () => {

  function btnClick(){
    console.log("Button was clicked")
  }

  function mouseEnter(){
    console.log('Mouse Entered')
  }
  
  function inputChange(elem){
    console.log(elem.target)
    console.log(elem.target.value)
  }

  const pageScroll =()=>{
    console.log('Page Scrolled')
  }


  return (
    <div>
      <h1>Hello,Aditya</h1>
      <button onClick={btnClick}>Click Me</button>
      <button onDoubleClick={function(){
        console.log('Hello World')
      }}>Click Me</button>
      <button onMouseEnter={mouseEnter}>Hover Me</button>
      <input onChange={inputChange} type="text" placeholder="Enter Your Name"/>
      <div onMouseMove={()=>{
        console.log("Wow");
      }} className='box'></div>
      <div onWheel={pageScroll} className="page1"></div>
      <div onWheel={pageScroll} className="page2"></div>
      <div onWheel={pageScroll} className="page3"></div>
    </div>
  )
}

export default App
