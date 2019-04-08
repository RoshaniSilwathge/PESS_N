import axios from 'axios';

//export const BASE_URL = (process.env.NODE_ENV === 'development') ? 'http://localhost:8080' : 'http://ec2-13-59-150-149.us-east-2.compute.amazonaws.com';

axios.defaults.baseURL = 'http://localhost:8080';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.put['Content-Type'] = 'application/json';
axios.defaults.headers.delete['Content-Type'] = 'application/json';
const instance = axios.create();

instance.interceptors.request.use((config) => {
    config.headers.Authorization = localStorage.getItem('accessToken');
    return config;
});

export const sendPOSTRequest = (destination, payload) => {
    return instance.post(destination, JSON.stringify(payload));
};

export const sendPUTRequest = (destination, payload) => {
    return instance.put(destination, JSON.stringify(payload));
};

export const sendDELETERequest = (destination) => {
    return instance.delete(destination);
};

export const sendGETRequest = (destination) => {
    return instance.get(destination);
};

export const sendFormDataRequest = (destination, formData, configs = {
    headers: {
        'content-type': 'multipart/form-data'
    }
}) => {
    return instance.post(destination, formData, configs);
};
