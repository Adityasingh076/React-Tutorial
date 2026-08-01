import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Men from './pages/Men'
import Women from './pages/Women'
import { Routes , Route } from 'react-router-dom'
import NotFound from './pages/NotFound'
import Courses from './pages/Courses'
import CourseDetail from './pages/CourseDetail'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/courses' element={<Courses/>}></Route>
        <Route path='/courses/:id' element={<CourseDetail/>}></Route>
        <Route path='/product' element={<Product/>}>
        /*Nested Routes*/
          <Route path='men' element={<Men/>}></Route>
        <Route path='women' element={<Women/>}></Route>
        </Route>
        
      

        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
