import axios from 'axios';
import React, { useContext, useState } from 'react';
import Sidebar from '../../component/sidebar/Sidebar';
import { Context } from '../../context/Context';
import './Setting.css'

function Setting() {
    const {user, dispatch} = useContext(Context);
    const [file,setFile] = useState(null)
    const [username,setUsername] = useState("");
    const [email,setMail] = useState("");
    const [password,setPassword] = useState("");
    const [success,setSuccess] = useState(false);
    const PF = "http://localhost:9999/images/";

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({type: "UPDATE_START"})
        const updatedUser = {
            userId: user._id,
            username,
            email,
            password
        };
        if(file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name",filename)
            data.append("file",file)
            updatedUser.profilePicture = filename;
            try {
                await axios.post("/api/upload", data)
            } catch (error) {}
        }
        try {
            const res = await axios.put("/api/users/" + user._id, updatedUser)
            setSuccess(true);
            dispatch({type: "UPDATE_SUCCESS", payload: res.data})
        } catch (error) {
            dispatch({type: "UPDATE_FAIL"})
        }
    }
  return (
    <div className='setting'>
        <div className="settingWrapper">
            <div className="settingTitle">
                <span className="settingUpdateTitle">Update Your Account</span>
                <span className="settingDeleteTitle">Delete Account</span>
            </div>
            <form className="settingForm" onSubmit={handleSubmit}>
                <label>Profile Picture</label>
                <div className="settingPP">
                    <img 
                        src={file ? URL.createObjectURL(file) : PF + user.profilePicture} 
                        alt="img" 
                    />
                    <label htmlFor="fileInput">
                        <i className="settingPPIcon far fa-user"></i>
                    </label>
                    <input 
                        type="file" 
                        id="fileInput" 
                        style={{display:'none'}}
                        onChange={e => setFile(e.target.files[0])}
                    />
                </div>
                    <label>Username</label>
                    <input type="text" placeholder={user.username}  onChange={e => setUsername(e.target.value)}/>
                    <label>Email</label>
                    <input type="email" placeholder={user.email} onChange={e => setMail(e.target.value)}/>
                    <label>Password</label>
                    <input type="password" placeholder='password' onChange={e => setPassword(e.target.value)}/>
                    <button className="settingSubmit" type='submit'>Update</button>
                    {success && <span style={{color: "green"}}>Profile has been updated</span>}
            </form>
        </div>
        <Sidebar />
    </div>
  );
}

export default Setting;
