import axios from 'axios';
import React, { useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import './Login.css'

function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const {dispatch, isFetching} = useContext(Context)

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({type: "LOGIN_START"})
    try {
      const res = await axios.post("/api/auth/login",{
        username: userRef.current.value,
        password: passwordRef.current.value,
      })
      dispatch({type: "LOGIN_SUCCESS", payload: res.data})
    } catch (error) {
      dispatch({type: "LOGIN_FAIL"})
    }
  }
  return (
    <div className='login'>
        <span className='loginTitle'>Login</span>
        <form className="loginForm" onSubmit={handleSubmit}>
            <label>Username</label>
            <input type="text" className='loginInput' placeholder='Enter your username...'
              ref={userRef}
            />
            <label>Password</label>
            <input type="password" className='loginInput' placeholder='Enter your password...'
              ref={passwordRef}
            />
            <button className="loginButton" type="submit" disabled={isFetching}>Login</button>
        </form>
            <button className="RegisterButton">
                <Link className='link' to="/register" >Register</Link>
            </button>
    </div>
  );
}

export default Login;
