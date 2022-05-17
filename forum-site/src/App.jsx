import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.scss'
import Blogs from './components/blogs/Blogs'
import Auth from './components/auth/Auth'
import Login from './components/auth/children/login/Login.jsx'
import Register from './components/auth/children/register/Register.jsx'
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { setIsLoggedOut } from './store/isAuth'
import { useEffect } from 'react'
import { setIsAuth } from '@/store/isAuth';
import axios from '@/axios'

const App = () => {
  const navigateTo = useNavigate()
  const dispatch = useDispatch()
  const isAuth = useSelector(state => state.authenticated.isAuth)

  const logout = () => {
    dispatch(setIsLoggedOut())
    navigateTo('/auth/login')
  }

  const checkSession = async () => {
    try {
      const res = await axios.checkSession();
      dispatch(setIsAuth({ sid: res.data.sid, isAuth: true }))
    } catch (error) {
      console.warn(error);
      navigateTo('/auth/login')      
    } 
  }

  //mounted
  useEffect(() => {
    checkSession();
    setInterval(() => {
      checkSession();
    }, .2 * 60 * 1000);
  }, []);

  return (
    <div className="app">
      <div className="nav">
        {!isAuth ? <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/auth/login">Login</NavLink> : <a onClick={logout}>Logout</a>}
        <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/">Blogs</NavLink>
      </div>
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<Blogs />}></Route>
          <Route path="/auth" element={<Auth />}>
            <Route path="/auth/login" element={<Login isAuth={isAuth}/>}></Route>
            <Route path="/auth/register" element={<Register />}></Route>
          </Route>
        </Routes>
      </div>

    </div>
  )
}

export default App
