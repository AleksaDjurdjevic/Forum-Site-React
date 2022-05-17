import axios from 'axios'
import store from '@/store/store.js'

const instance = axios.create({
    baseURL: 'http://321x567.mars-t2.mars-hosting.com',
});

function handleRequestInterceptor(config) {
    try {
        const state = store.getState();
        const sid = state.authenticated.sid ? state.authenticated.sid : localStorage.getItem('sid');
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