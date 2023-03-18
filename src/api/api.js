import axios from "axios";
import { isPublicApi, asyncWrapper } from "utils/common.utils";
const baseURl = 'https://ehsan-api.vinratechllp.com'

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
    const status = error?.status;
    const error_msg = error?.response?.data ?? null ;
    if (error) {
        throw { data: null, error:error_msg }
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
        return { response:response?.data, error }
    }
}

export {
    FetchHandler
}