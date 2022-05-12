import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Login.scss'
import axios from '@/axios'
import { useDispatch } from 'react-redux'
import { setIsAuth } from '@/store/isAuth'


const Login = () => {

    //state
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const navigateTo = useNavigate()

    //methods
    const login = async () => {
        try {
            const res = await axios.login({
                email,
                password
            })
            localStorage.setItem('sid', res.data.sid)
            dispatch(setIsAuth({ sid: res.data.sid, isAuth: true }))
            navigateTo('/')
        } catch (error) {
            console.log(error.response.data.error)
        }
    }

    //html template
    return (
        <div className='login-wrap'>
            <input type="text" placeholder="Email" value={email} onInput={(e) => { setEmail(e.target.value.trim()) }} />
            <input type="password" placeholder="Password" value={password} onInput={(e) => { setPassword(e.target.value) }} />
            <span>Don't have an account? <Link to="/auth/register">Register</Link></span>
            <button className="button-8" onClick={login}>Login</button>
        </div>
    );
}

export default Login;