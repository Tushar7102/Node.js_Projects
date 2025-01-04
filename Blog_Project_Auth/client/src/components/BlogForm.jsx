import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";

function BlogForm() {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    publishDate: "",
    tags: '',
    content: "",
  });
  const { id } = useParams();
const Navigate=useNavigate()
  if (id) {
    useEffect(() => {
      axios.get(`${import.meta.env.VITE_URL}getblogbyid/${id}`,{
        withCredentials:true
      }).then((res) => {
        setFormData(res.data.Blogs)
      }).catch((err) => {
        console.log(err)
      })
    }, [])
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };  
  const handleSubmit = (e) => {
    e.preventDefault();
    if(typeof formData.tags==="string"){
      formData.tags = formData.tags.split(',');
    }
    if (!id) {
      axios.post(`${import.meta.env.VITE_URL}createblog`, formData,{
        withCredentials:true
      })
        .then((res) => {
          setFormData({
            title: "",
            author: "",
            publishDate: "",
            tags: "",
            content: "",
          });
        })
        .catch((err) => {
          console.log(err);
        })
    }
    else {
      axios.patch(`${import.meta.env.VITE_URL}Updateblogs/${id}`, formData,{
        withCredentials:true
      })
        .then((res) => {
          Navigate("/")
          setFormData({
            title: "",
            author: "",
            publishDate: "",
            tags: "",
            content: "",
          });
        })
        .catch((err) => {
          console.log(err)
        })
    }
  };
  return (
    <div style={{ maxWidth: "600px", margin: "auto", padding: "20px" }}>
      <h1>Create a Blog Post</h1>
      <form   className="FOMS-Blogs" onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Enter the blog title"
          value={formData.title}
          onChange={handleChange}
          required
        />

        <label htmlFor="author">Author</label>
        <input
          type="text"
          id="author"
          name="author"
          placeholder="Enter the author's name"
          value={formData.author}
          onChange={handleChange}
          required
        />

        <label htmlFor="publishDate">Publish Date</label>
        <input
          type="date"
          id="publishDate"
          name="publishDate"
          value={formData.publishDate}
          onChange={handleChange}
        />

        <label htmlFor="tags">Tags</label>
        <input
          type="text"
          id="tags"
          name="tags"
          placeholder="Enter tags "
          value={formData.tags}
          onChange={handleChange}
        />

        <label htmlFor="content">Content</label>
        <textarea
          id="content"
          name="content"
          rows="8"
          placeholder="Write your blog content here..."
          value={formData.content}
          onChange={handleChange}
        ></textarea>
        <button type="submit" className="formbtn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default BlogForm;
