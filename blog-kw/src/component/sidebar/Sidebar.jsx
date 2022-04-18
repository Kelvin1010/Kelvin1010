import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Sidebar.css'

function Sidebar() {
    const [cats,setCats] = useState([]);

    useEffect(()=>{
        const getCats = async ()=>{
            const res = await axios.get("/api/categories")
            setCats(res.data);
        }
        getCats();
    },[])

  return (
    <div className='sidebar'>
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            {/* <img 
                style={{height: 200}}
                src="https://scontent.fhan5-9.fna.fbcdn.net/v/t1.6435-9/139329128_1379543879059104_7042221223248134760_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=174925&_nc_ohc=pGxKla3baycAX9DcnGO&tn=pX0c1Jm3LsiQ2eDY&_nc_ht=scontent.fhan5-9.fna&oh=00_AT9I7ZL0Ab6Xh-HWoMiDch_e6yNLf9wccg_oSw5_KPryzg&oe=6210B16B"
                alt="img" 
            /> */}
            <p>
                I'm a developer
            </p>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
            {cats.map((h) =>(
                    <li className="sidebarListItem">{h.name}</li>
                ))}
            </ul>
        </div>
        <div className="sidebarItem">
            <span className='sidebarTitle'>FOLLOW US</span>
            <div className="sidebarSocial">
            <i className="sidebarIcon fab fa-facebook-square"></i>
            <i className="sidebarIcon fab fa-twitter-square"></i>
            <i className="sidebarIcon fab fa-pinterest-square"></i>
            <i className="sidebarIcon fab fa-instagram-square"></i>
            </div>
        </div>
    </div>
  );
}

export default Sidebar;
