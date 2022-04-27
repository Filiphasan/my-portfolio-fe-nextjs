import axios from 'axios';
import getConfig from 'next/config';
import { constantsVariables } from '../helper/constantsVariable';

const { publicRuntimeConfig } = getConfig();

const baseUrl = publicRuntimeConfig.baseApiUrl;

axios.defaults.baseURL = baseUrl;

const _get = (endpoint) => {
    return axios.get(endpoint, getHeader()).then(handleResponse)
}

const _post = (endpoint, data) => {
    return axios.post(endpoint, data, getHeader()).then(handleResponse)
}

const _put = (endpoint, data, id = null) => {
    return axios.put(endpoint, data, getHeader()).then(handleResponse)
}

const _delete = (endpoint, id) => {
    return axios.delete(`${endpoint}/${id}`, getHeader()).then(handleResponse)
}

const handleResponse = (response) => {
    const data = response.data;
    if (data && data.status === 'success'){
        return data.data
    }else if (data && data.status === 'error'){
        // API tarafından anlamlı hata mesajı dönmesi
        return Promise.reject(data.message)
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

export const API = {
    'get': _get,
    'post': _post,
    'put': _put, 
    'delete': _delete
};