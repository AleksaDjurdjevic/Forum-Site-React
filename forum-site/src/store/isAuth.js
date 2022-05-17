import { createSlice } from '@reduxjs/toolkit'

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
        setIsLoggedOut(state, action) {
            state.sid = ''
            state.isAuth = false
            localStorage.removeItem('sid')
        }
    },
})

// Action creators are generated for each case reducer function
export const { setIsAuth, setIsLoggedOut } = authenticated.actions

export default authenticated.reducer