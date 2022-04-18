import axios from 'axios';
import React, { useContext, useState } from 'react';
import { Context } from '../../context/Context';
import './Write.css'

function Write() {
    const [title,setTitle] = useState("")
    const [desc,setDesc] = useState("")
    const [file,setFile] = useState(null)
    const {user} = useContext(Context)

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = {
            username: user.username,
            title,
            desc,
        };
        if(file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name",filename)
            data.append("file",file)
            newPost.photo = filename;
            try {
                await axios.post("/api/upload", data)
            } catch (error) {}
        }
        try {
            const res = await axios.post("/api/posts", newPost)
            window.location.replace("/home/post/" + res.data._id)
        } catch (error) {}
    }
  return (
    <div className='write'>
        {file && 
            <img 
            className='writeImg'
            src={URL.createObjectURL(file)}
            alt="img" 
        />
        }
        <form className='writeForm' onSubmit={handleSubmit}>
            <div className='writeFormGroup'>
                <label htmlFor="fileInput">
                    <i class="writeIcon far fa-plus-square"></i>
                </label>
                <input type="file" id="fileInput" style={{display: 'none'}} 
                    onChange={e => setFile(e.target.files[0])}
                />
                <input type="text" placeholder='Title' className='writeInput' autoFocus={true} 
                    onChange={e => setTitle(e.target.value)}
                />
            </div>
            <div className="writeFormGroup">
                <textarea className='writeInput writeText' placeholder='Tell your story...' type="text" 
                    onChange={e => setDesc(e.target.value)}
                ></textarea>
            </div>
            <button className="writeSubmit" type='submit'>
                Public 
            </button>
        </form>
    </div>
  );
}

export default Write;
