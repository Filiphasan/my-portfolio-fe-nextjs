import axios from 'axios';
import getConfig from 'next/config';
import { constantsVariables, httpStatusCode, responseStatusMsg } from '../helper/constantsVariable';

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
    let url = endpoint;
    if (id) url = `${url}/${id}`
    return axios.put(url, data, getHeader()).then(handleResponse)
}

const _delete = (endpoint, id = null) => {
    let url = endpoint;
    if (id) url = `${url}/${id}`
    return axios.delete(url, getHeader()).then(handleResponse)
}

const handleResponse = (response) => {
    const data = response.data;
    if (data && data?.status === responseStatusMsg.success) {
        return data.data
    } else if (data && data?.status === responseStatusMsg.error) {
        switch (data.status_code) {
            case httpStatusCode.forbidden:
            case httpStatusCode.unAuthorize:
                //Clear Token
                break;
            case httpStatusCode.badRequest:
                //Validation Errors
                break;
            case httpStatusCode.notFound:
                //Redirect 404 Page or Send error msg
                break;
            default:
                //Other Error status
                break;
        }
    } else {
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
    } else {
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