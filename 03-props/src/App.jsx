import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent ' >
      <Card user='Aditya' age={18} img='https://images.unsplash.com/photo-1784744847844-7990d7da0e15?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D'/>
      <Card user='Bob' age={22} img='https://images.unsplash.com/photo-1784652587186-868e0206b64f?q=80&w=1166&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
      <Card user='Charlie' age={25} img='https://images.unsplash.com/photo-1779896412071-bf3160aad19e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
    </div>
  )
}

export default App


