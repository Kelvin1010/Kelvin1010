import React from 'react';
import Sidebar from '../../component/sidebar/Sidebar';
import SinglePost from '../../component/singlePost/SinglePost';
import './Single.css'

function Single() {
  return (
    <div className='single'>
        <SinglePost />
        <Sidebar />
    </div>
  );
}

export default Single;
