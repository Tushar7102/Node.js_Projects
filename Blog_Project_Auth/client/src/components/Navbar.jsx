import axios from 'axios';
import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import { Link, NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';

const Navbar = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  const User = JSON.parse(localStorage.getItem("User"))
  const DeleteAllBlogs = () => {
    axios.delete(`${import.meta.env.VITE_URL}DeleteAllblogs`, {
      withCredentials: true
    }).then((res) => {
      toast.success(res.data.message)
    }).catch((err) => {
      console.log(err)
    })
  }
  const { token } = cookies;
  const Logout = () => {
    removeCookie("token");
  }
  return (
    <nav className="navbar">

      <ul className="nav-links">
        <li>
          <NavLink to="/"  >Home</NavLink>
        </li>
        <li>
          <NavLink to="/Form" >Form</NavLink>
        </li>
        {
          !token ?
            <li style={{ marginTop: "-2px" }}>
              <button className='login-button'
              >
                <NavLink to="/Login" style={{ fontSize: "16px" }} >Login</NavLink>
              </button>
            </li> :
            <li style={{ marginTop: "-2px" }}>
              <button onClick={Logout} className='logout-button' >
                <NavLink to="" style={{ fontSize: "16px" }} >Logout</NavLink>
              </button>
            </li>
        }

        {
          User.role === "admin" ?
            <div>
              <button className='admin-button'><NavLink to="/AdminBlogs" style={{ fontSize: "16px" }} >GetAllBlogs</NavLink></button>
              <button className='admin-button' onClick={DeleteAllBlogs} ><NavLink  style={{ fontSize: "16px" }} >DeleteAllBlogs</NavLink></button>
            </div>
            :
            ""
        }


      </ul>
      <div className="hamburger">
        <span></span>
        <span></span>
        <span></span>
      </div>

    </nav>
  );
}

export default Navbar;
