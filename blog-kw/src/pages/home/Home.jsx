import React, { useEffect, useState } from 'react';
import Header from '../../component/header/Header';
import Posts from '../../posts/Posts';
import Sidebar from '../../component/sidebar/Sidebar';
import './Home.css';
import axios from 'axios'
import { useLocation } from 'react-router-dom';

function Home() {
  const [posts,setPosts] = useState([]);
  const search = useLocation();
  console.log(search)

  useEffect(() =>{
    const fetchPosts = async ()=>{
      const res = await axios.get("/api/posts")
      setPosts(res.data)
    }
    fetchPosts();
  },[])
  return (
    <>
      <Header/>
      <div className='home'>
          <Posts posts={posts}/>
          <Sidebar />
      </div>
    </>
  );
}

export default Home;
