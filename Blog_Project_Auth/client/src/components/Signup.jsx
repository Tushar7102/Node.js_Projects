import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';


const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [NAME, SETNAME] = useState("");
    const handleSignup = (e) => {
        e.preventDefault();
        axios.post(`${import.meta.env.VITE_URL}User/Signup`, {
            email: email,
            password: password,
            name: NAME
        }, {
            withCredentials: true
        }).then((res) => {
            toast.success(res.data.message)
        })
            .catch((err) => {
                toast.error(err?.response.data.message || "Something Went wrong")
            })
    };

    return (
        <div className="signup-wrapper">
            <h2 className="signup-header">Create Account</h2>
            <form onSubmit={handleSignup} className="signup-form">
                <div className="signup-form-group">
                    <label className="signup-form-label">Name:</label>
                    <input
                        type="text"
                        placeholder="Enter Name"
                        value={NAME}
                        onChange={(e) => SETNAME(e.target.value)}
                        className="signup-form-input"
                        required
                    />
                </div>
                <div className="signup-form-group">
                    <label className="signup-form-label">email:</label>
                    <input
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="signup-form-input"
                        required
                    />
                </div>
                <div className="signup-form-group">
                    <label className="signup-form-label"> Password:</label>
                    <input
                        type="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="signup-form-input"
                        required
                    />
                </div>
                <button type="submit" className="signup-form-button">
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default Signup;
