import axios from 'axios'
import { useSelector } from 'react-redux'


const instance = axios.create({
    baseURL: 'http://321x567.mars-t2.mars-hosting.com',
});

function handleRequestInterceptor(config) {
    try {
        const sid = useSelector(state => state.authenticated.sid) ? useSelector(state => state.authenticated.sid) : localStorage.getItem('sid')
        if (config.params) {
            config.params.sid = sid;
        } else {
            config.params = {
                sid,
            };
        }
    } catch (err) {
        console.warn("error", err);
    }
}

instance.interceptors.request.use(config => {
    handleRequestInterceptor(config);

    return config;
});


export default instance 