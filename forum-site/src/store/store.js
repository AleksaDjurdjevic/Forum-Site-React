import { configureStore } from '@reduxjs/toolkit'
import authenticated from './isAuth'

export default configureStore({
    reducer: {
        authenticated
    },
})