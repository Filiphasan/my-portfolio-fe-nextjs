import axios from 'axios';
import getConfig from 'next/config';
import { constantsVariables } from '../helper/constantsVariable';

const { publicRuntimeConfig } = getConfig();

const baseUrl = publicRuntimeConfig.baseApiUrl;

axios.defaults.baseURL = baseUrl;

const get = (endpoint) => {
    return axios.get(endpoint, getHeader()).then(handleResponse)
}

const post = (endpoint, data) => {
    return axios.post(endpoint, data, getHeader()).then(handleResponse)
}

const handleResponse = (response) => {
    const data = response.data;
    if (data && data.status === 'success'){
        return data.data
    }else if (data && data.status === 'error'){
        // API tarafından anlamlı hata mesajı dönmesi
        console.log(data.message);
    }else{
        return Promise.reject("Beklenmeyen Bir Hata Oluştu!")
    }
}

const getHeader = (contentType = "application/json") => {
    const token = ""; // Tokeni cookieden çekmenin yolunu bulacağım
    if (token) {
        return {
            'Authorization': `Bearer ${token}`,
            'Content-Type': contentType
        }
    }else{
        return {
            'Content-Type': contentType
        }
    }
}

export default get;