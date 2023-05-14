import axios from "axios";
import { isPublicApi, asyncWrapper , getLocalStorage} from "utils/common.utils";
import { AUTH_TOKEN } from "constants/Localstorage.constants";
// const baseURl = 'https://ehsan-api.vinratechllp.com'
const baseURl = 'http://127.0.0.1:8000'
// const baseURl = 'https://104.236.1.97:2000'
// const baseURl = 'https://ehasan-api.vinratechllp.com'

export const options = {
    method: 'get',
    headers: {
        'Accept': 'application/json',
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
        options.headers.Authorization = `Token ${getLocalStorage(AUTH_TOKEN)}`
    }
    const response = await axios.request(options)
    return response
}

const FetchHandler = async function (config) {
    const { data: response, error } = await asyncWrapper(axioFetch(config))
    const status = error?.status;
    const error_msg = error?.response?.data ?? null ;
    console.log(status ," it is your name ")
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