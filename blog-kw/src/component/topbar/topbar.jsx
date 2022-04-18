import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import './topbar.css'

function Topbar() {
  const {user, dispatch} = useContext(Context);
  const PF = "http://localhost:9999/images/";
  const handleLogout = () => {
    dispatch({type: "LOGOUT"})
  }
  return (
      <div className='topbar'>
        <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        </div>
        <h2>Kelvin Ward</h2>
        <div className="topCenter">
          <ul className="topList">
            <li className="topListItem">
              <Link to="/home" className='link'>HOME</Link>
            </li>
            <li className="topListItem">
              <Link to="/home/about" className='link'>ABOUT</Link>
            </li>
            <li className="topListItem">
              <Link to="/home/videomusic" className='link'>VIDEO MUSIC</Link>
            </li>
            <li className="topListItem">
              <Link to="/home/write" className='link'>WRITE</Link>
            </li>
            <li className="topListItem" onClick={handleLogout}>
              {user && "LOGOUT"}
            </li>
          </ul>
        </div>
        <div className="topRight">
          {
            user ? 
            (
              <Link to="/home/setting">
                <img 
                  className='topImg' 
                  src={ PF + user.profilePicture} 
                  alt="img" 
                />
              </Link>
            ) : (
              <ul className='topList'>
                <li className="topListItem">
                  <Link to="/login" className='link'>LOGIN</Link>
                </li>
                <li className="topListItem">
                  <Link to="/register" className='link'>REGISTER</Link>
                </li>
              </ul>
            )
          }
          <i className="searchIcon fas fa-search"></i>
        </div>
      </div>
  );
}

export default Topbar;
