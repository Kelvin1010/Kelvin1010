import React, { useContext, useEffect, useState } from 'react';
import './SinglePost.css';
import {useLocation} from 'react-router-dom'
import axios from 'axios';
import { Context } from '../../context/Context';

function SinglePost() {
    const location = useLocation();
    const path = location.pathname.split("/")[3];
    const [post,setPost] = useState({});
    const PF = "http://localhost:9999/images/";
    const {user} = useContext(Context)
    const [title,setTitle] = useState("")
    const [desc,setDesc] = useState("")
    const [updateMode,setUpdateMode] = useState(false)

    useEffect(() =>{
        const getPost = async ()=>{
            const res = await axios.get("/api/posts/" + path);
            setPost(res.data)
            setTitle(res.data.title)
            setDesc(res.data.desc)
        };
        getPost();
    },[path]);

    const handleDelete = async () => {
        try {
            await axios.delete(`/api/posts/${post._id}`, 
            {data:{username: user.username}});
            window.location.replace("/home")
        } catch (error) {}
    }

    const handleUpdate = async () => {
        try {
            await axios.put(`/api/posts/${post._id}`, 
            {username: user.username, title, desc});
            //window.location.reload()
            setUpdateMode(false)
        } catch (error) {}
    }
  return (
    <div className='singlepost'>
        <div className="singlePostWrapper">
            {post.photo && (
                <img 
                    className='singlePostImg' 
                    src={PF + post.photo} 
                    alt="img" 
                />
            )}
            {
                updateMode ? 
                <input 
                    type="text" 
                    value={title} 
                    className='singlePostTitleInput' 
                    autoFocus
                    onChange={(e) =>setTitle(e.target.value)}
                /> :
                (
                    <h1 className='singlePostTitle'>
                        {title}
                        {post.username === user.username && (
                            <div className="singlePostEdit">
                                <i class="singlePostIcon far fa-edit" 
                                    onClick={() =>setUpdateMode(true)}
                                ></i>
                                <i class="singlePostIcon far fa-trash-alt" onClick={handleDelete}></i>
                            </div>
                        )}
                    </h1>
                )

            }
            <div className="singlePostInfo">
                <span className='singlePostAuth'>Author: <b>{post.username}</b></span>
                <span className='singlePostDate'>Time: <b>{new Date(post.createdAt).toDateString()}</b></span>
            </div>
            {updateMode ? (
                <textarea 
                    className='singlePostDescInput' 
                    value={desc}  
                    autoFocus
                    onChange={(e) =>setDesc(e.target.value)}
                />
            ):(
                <p className='singlePostDesc'>
                {desc}
            </p>
            )}
            {updateMode && (
                <button className="singlePostButton" onClick={handleUpdate}>Update</button>
            )}
        </div>
    </div>
  )
}

export default SinglePost;
