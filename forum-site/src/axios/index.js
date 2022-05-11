import instance from './config'

export default {
    login: data => instance.post('/login', data),
    register: data => instance.post('/register', data),
}