import instance from './config'

export default {
    login: data => instance.post('/login', data)
}