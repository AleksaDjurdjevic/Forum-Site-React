import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from '@/axios'

const Register = () => {

    //state
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    //methods
    const register = async () => {
        try {
            const res = await axios.register({
                displayName: name,
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
            <input type="text" placeholder="Name" value={name} onInput={(e)=>{setName(e.target.value.trim())}}/>
            <input type="text" placeholder="Email" value={email} onInput={(e)=>{setEmail(e.target.value.trim())}}/>
            <input type="password" placeholder="Password" value={password} onInput={(e)=>{setPassword(e.target.value)}}/>
            <span>Have an account? <Link to="/auth/login">Login</Link></span>
            <button className="button-8" onClick={register}>Register</button>
        </div>
    );
}

export default Register;