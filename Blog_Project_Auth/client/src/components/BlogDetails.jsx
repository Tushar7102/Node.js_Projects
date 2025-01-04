import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import moment from "moment"

const BlogDetails = () => {
    const [state, setstate] = useState({})
    const { id } = useParams();

    
    const Fetchdata = () => {
        axios.get(`${import.meta.env.VITE_URL}getblogbyid/${id}`,{
            withCredentials:true
        }).then((res) => {
            setstate(res.data.Blogs)
        }).catch((err) => {
            console.log(err)
        })
    }
    useEffect(() => {
        Fetchdata()
    }, [])
    const { title, author, publishdate, content, tags } = state;
    return (
        <div>
            <div className="description-card">
                <h3 className="description-title">{title}</h3>

                <p className="description-content">{content}</p>
                <div className="description-meta">
                    <span className="description-author">By: {author}</span>
                    <span className="description-date">Published on: {moment(publishdate, "DD").fromNow()}</span>
                </div>
                <div className="description-tags">
                    {tags?.map((tag, index) => (
                        <span key={index} className="description-tag">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default BlogDetails
