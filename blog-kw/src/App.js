import './App.css';
import Home from './pages/home/Home';
import Topbar from './component/topbar/topbar';
import Single from './pages/single/Single';
import Write from './pages/write/Write';
import Setting from './pages/setting/Setting';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Music from './pages/videomusic/Music';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { useContext } from 'react';
import { Context } from './context/Context';
import About from './pages/about/About';

function App() {
  const {user} = useContext(Context);
  return (
      <BrowserRouter>
        <Topbar/>
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/register" element={user ? <Home/> : <Register/>} />
          <Route path="/login" element={user ? <Home/> : <Login/>} />
          <Route path="/home/write" element={user ? <Write/> : <Register/>} />
          <Route path="/home/setting" element={user ? <Setting/> : <Register />} />
          <Route path="/home/post/:postID" element={<Single/>} />
          <Route path="/home/videomusic" element={<Music/>} />
          <Route path="/home/about" element={<About/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
