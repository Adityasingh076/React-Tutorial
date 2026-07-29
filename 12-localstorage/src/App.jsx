import React from 'react'

const App = () => {
   localStorage.setItem('User' , 'Aditya') //localStorage.setItem(Key,value) Add or update data
   localStorage.setItem('age' , '22')
   const user = localStorage.getItem('User') //localstorage.getItem(key) this method is used to read the data 
   console.log(user)
   const age = localStorage.getItem('age')//localstorage.getItem(key) this method is used to read the data 
   console.log(age) 
     // localStorage.clear() //This method is used to Delete all items
   localStorage.removeItem('User') //This method is used to remove the user from local storage
   console.log(localStorage.length) //This method is used to get length of a localStorage

   const newUser={
    Name:"Aditya",
    age:22,
    city:"Delhi"
   }
   localStorage.setItem('User' , JSON.stringify(newUser)) //JSON.stringify() Coverts js object or Array into JSON String
  return (
    <div>
      App
    </div>
  )
}

export default App
