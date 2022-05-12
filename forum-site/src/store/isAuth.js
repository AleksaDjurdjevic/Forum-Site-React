import { createSlice } from '@reduxjs/toolkit'
import axios from '@/axios'

export const authenticated = createSlice({
    name: 'authenticated',
    initialState: {
        isAuth: false,
        sid: ''
    },
    reducers: {
        setIsAuth(state, action) {
            state.sid = action.payload.sid
            state.isAuth = action.payload.isAuth
            localStorage.setItem('sid', state.sid)
        },
        setIsLoggedOut(state,action) {
            state.sid = ''
            state.isAuth = false
            localStorage.removeItem('sid')
        },
        checkSession() {
            try {
                const res = axios.checkSession()
            } catch (error) {
                console.log(error)      
            }
        }
    },
})

// Action creators are generated for each case reducer function
export const { setIsAuth, setIsLoggedOut, checkSession } = authenticated.actions

export default authenticated.reducer