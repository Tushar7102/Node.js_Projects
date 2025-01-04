import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const AdminBlogs = () => {
    const [state, setstate] = useState([]);
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_URL}getAllBlogs`, {
            withCredentials: true
        }).then((res) => {
            setstate(res.data.AllBlogs)
        }).catch((err) => {
            console.log(err)
        })
    }, [])

  


console.log(state.length)

    return (
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)"}}>
            {

state.length>0  ?   state.map((item, index) => {
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
                                    <Link to={`/Update/${item._id}`} style={{ color: "#ffff" }}>
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
                }):<p>No Notes found</p>
            }

        </div>
    )
}

export default AdminBlogs
