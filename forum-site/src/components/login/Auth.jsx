import React, { useState } from 'react';
import './Login.scss'
import axios from '../../axios/index'

const Login = () => {

    //state
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    //methods
    const login = async () => {
        try {
            const res = await axios.login({
                email,
                password
            })
            console.log(res)
        } catch (error) {
            console.log(error.response.data.error)
        }
    }

    //html template
    return (
        <div className='login-wrap'>
            <input type="text" placeholder="Email" value={email} onInput={(e)=>{setEmail(e.target.value.trim())}}/>
            <input type="password" placeholder="Password" value={password} onInput={(e)=>{setPassword(e.target.value)}}/>
            <button className="button-8" onClick={login}>Login</button>
        </div>
    );
}

export default Login;
