import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    axios.post(`${import.meta.env.VITE_URL}User/Signin`, {
      email,
      password
  }, {
      withCredentials: true
  }).then((res) => {
      toast.success(res.data.message)
      localStorage.setItem("User",JSON.stringify(res.data))
  })
      .catch((err) => {
        console.log(err)
          toast.error(err?.message)
      })
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      <form onSubmit={handleLogin} className="login-form">
        <div className="form-group">
          <label className="form-label">Email:</label>
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Password:</label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-input"
            required
          />
        </div>
        <button type="submit" className="form-button">
          Login
        </button>
<p style={{textAlign:'center'}}>
  Don't have an account? <Link  style={{color:"#007bff",textDecoration:"none"}} to={'/Signup'}>Create Now</Link>
</p>
        
        
        
      </form>
    </div>
  );
};

export default Login;
