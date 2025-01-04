import React from 'react'
import BlogList from './BlogList'
import BlogForm from './BlogForm'
import { Route, Routes } from 'react-router-dom'
import BlogDetails from './BlogDetails'
import Login from './Login'
import Signup from './Signup'
import Privacy from './Privacy'
import AdminBlogs from './AdminBlogs'

const Allroutes = () => {
  return (
    <Routes>
        <Route path='/' element={
          <Privacy>
          <BlogList/>
          </Privacy>} ></Route>
        <Route  path='/Form' element={
          <Privacy>
          <BlogForm/>
          </Privacy>} ></Route>
        <Route  path='/Details/:id' element={<BlogDetails/>} ></Route>
        <Route  path='/Update/:id' element={<BlogForm/>} ></Route>
        <Route  path='/Login' element={<Login/>} ></Route>
        <Route  path='/Signup' element={<Signup/>} ></Route>
        <Route  path='/AdminBlogs' element={<AdminBlogs/>} ></Route>
        
    </Routes>
  )
}
export default Allroutes
