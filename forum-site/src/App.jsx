import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.scss'
import Blogs from './components/blogs/Blogs'
import Auth from './components/auth/Auth'
import Login from './components/auth/children/login/Login.jsx'
import Register from './components/auth/children/register/Register.jsx'
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { setIsLoggedOut, checkSession } from './store/isAuth'
import { useEffect } from 'react'

const App = () => {
  const navigateTo = useNavigate()
  const dispatch = useDispatch()
  const isAuth = useSelector(state => state.authenticated.isAuth)

  const logout = () => {
    dispatch(setIsLoggedOut())
    navigateTo('/auth/login')
  }

  const invokeCheckSession = async () => {
    await dispatch(checkSession())
  }
  //mounted
  useEffect(() => {
    setInterval(() => {
      invokeCheckSession()
      navigateTo('/auth/login')
    }, 1000);
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
            <Route path="/auth/login" element={<Login />}></Route>
            <Route path="/auth/register" element={<Register />}></Route>
          </Route>
        </Routes>
      </div>

    </div>
  )
}

export default App
