import React from 'react'
import BlogList from './BlogList'
import BlogForm from './BlogForm'
import { Route, Routes } from 'react-router-dom'
import BlogDetails from './BlogDetails'

const Allroutes = () => {
  return (
    <Routes>
        <Route path='/' element={<BlogList/>} ></Route>
        <Route  path='/Form' element={<BlogForm/>} ></Route>
        <Route  path='/Details/:id' element={<BlogDetails/>} ></Route>
        <Route  path='/Update/:id' element={<BlogForm/>} ></Route>
        
    </Routes>
  )
}
export default Allroutes
