import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css'

function Register() {
  const [username, setUsername] = useState("")
  const [email, setMail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("/api/auth/register",{
        username,
        email,
        password,
      });
      res.data && window.location.replace("/login")
    } catch (error) {
      setError(true)
    }
  }

  return (
      <div className='register'>
        <span className='registerTitle'>Register</span>
        <form className='registerForm' onSubmit={handleSubmit}>
            <label>Username</label>
            <input type="text" className='registerInput' placeholder='Enter your name...'
              onChange={(e) =>setUsername(e.target.value)}
            />
            <label>Email</label>
            <input type="text" className='registerInput' placeholder='Enter your email...'
              onChange={(e) =>setMail(e.target.value)}
            />
            <label>Password</label>
            <input type="password" className='registerInput' placeholder='Enter your passwrord...'
              onChange={(e) =>setPassword(e.target.value)}
            />
            <button className="registerButton" type="submit">Register</button>
        </form>
        <button className="loginNow">
        <Link className='link' to="/login" >Login Now</Link>
        </button>
        {error && <span style={{color: "red", fontSize: 20, marginTop:20,textAlign:"center"}}>Some thing went wrong!<br/>This account already exists. Please use another username</span>}
      </div>
  );
}

export default Register;
