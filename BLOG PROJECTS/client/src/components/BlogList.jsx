import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'

const BlogList = () => {
  const [state, setstate] = useState([])
  const Fetchdata = () => {
    axios.get(`${import.meta.env.VITE_URL}getblog`).then((res) => {
      setstate(res.data.Blogs)
    }).catch((err) => {
      console.log(err)
    })
  }

  const deleteblogs = (id) => {
    axios.delete(`${import.meta.env.VITE_URL}delete/${id}`)
      .then((res) => {
        Fetchdata()
      })
      .catch((err) => {
        console.log(err)
      })
  }
  useEffect(() => {
    Fetchdata()
  }, [])
  return (
    <div>
      <div>
        <h1>Blog List</h1>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)" }}>
        {
         state.length>0  ?  state.map((item, index) => {
            return (
              <div key={item._id} className="blog-card">
                <Link to={`/Details/${item._id}`} className="blog-link">
                  <h3 className="blog-title">{item.title}</h3>
                  <p className="blog-content">{item.content}</p>
                </Link>

                <div className="blog-info">
                  <span className="blog-author">By: {item.author}</span>
                  <div className="blog-tags">
                    {item.tags.map((tag, index) => (
                      <span key={index} className="blog-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="blog-actions">
                  <button
                    className="blog-edit-btn"
                  >
                    <Link  to={`/Update/${item._id}`} style={{color:"#ffff"}}>
                    Edit
                    </Link>
                  </button>
                  <button
                    className="blog-delete-btn" onClick={() => deleteblogs(item._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            )
          }):<p>No notes found</p>
        }
      </div>
    </div>
  )
}

export default BlogList
