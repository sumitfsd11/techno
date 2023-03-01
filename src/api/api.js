import axios from "axios";
import { isPublicApi, asyncWrapper } from "utils/common.utils";
const baseURl = 'https://jsonplaceholder.typicode.com'

export const options = {
    method: 'get',
    headers: {
        // 'Accept': 'application/json',
        'Content-type': 'application/json; charset=UTF-8',
    },
};

export const axioFetch = async function (config) {
    options.method = config?.method;
    options.url = baseURl + config.url;
    if (config?.data) {
        options.data = JSON.stringify(config?.data)
    }
    if (config?.params) {
        options.params = config?.params
    }
    if (isPublicApi(config.url)) {
        delete options.headers.Authorization;
    } else {
        options.headers.Authorization = `Token ${localStorage.getItem('user')}`
    }
    const response = await axios.request(options)
    return response
}

const FetchHandler = async function (config) {
    const { data: response, error } = await asyncWrapper(axioFetch(config))
    const status = response?.status;
    if (error) {
        return { data: null, error }
    }
    if (status === 401) {
        const __response = {
            message: '"Session is Expired!"',
            data: response?.data
        }
        localStorage.clear();
        window.location.href = '/';
        return __response
    }
    else {
        return { response, error }
    }
}

export {
    FetchHandler
}