import axios from 'axios';
import getConfig from 'next/config';
import { constantsVariables } from '../helper/constantsVariable';

const { publicRuntimeConfig } = getConfig();

const baseUrl = publicRuntimeConfig.baseApiUrl;

axios.defaults.baseURL = baseUrl;

const get = (endpoint) => {
    const data = axios.get(endpoint).then(
        res => {
            console.log(res.data);
            return res.data;     
        }
    )
}


const getHeader = (contentType = "application/json") => {
    const token = sessionStorage.getItem(constantsVariables.tokenSessionKey);
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