import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.scss'
import Blogs from './components/blogs/Blogs'
import Login from './components/login/Auth'
import { Link, NavLink } from "react-router-dom";

const App = () => {

  return (
    <div className="app">
      <Router>
        <div className="nav">
          <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/auth">Login</NavLink>
          <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/">Blogs</NavLink>
        </div>
        <div className="wrapper">
          <Routes>
            <Route path="/" element={<Blogs />}></Route>
            <Route path="/auth" element={<Login />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App
