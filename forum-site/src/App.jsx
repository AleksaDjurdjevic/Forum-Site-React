import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.scss'
import Blogs from './components/blogs/Blogs'
import Auth from './components/auth/Auth'
import Login from './components/auth/children/login/Login.jsx'
import Register from './components/auth/children/register/Register.jsx'
import { Link, NavLink } from "react-router-dom";

const App = () => {

  return (
    <div className="app">
      <Router>
        <div className="nav">
          <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/auth/login">Login</NavLink>
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
      </Router>
    </div>
  )
}

export default App
