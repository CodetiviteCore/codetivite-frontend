import axios from "axios"
import { BASE_URL } from "./urls"
import  Cookies from 'js-cookie';


//axios client
const client = (() => {
    return axios.create({
        baseURL: BASE_URL
    })
})()

//getToken 
var token = Cookies.get("authToken")

//request Processor
export const request = async (options) => {
    client.defaults.headers.common.Authorization = `Bearer ${token}`;

    //handle success
    const onSuccess = (response) => {
        return response.data
    }
    const onError = (error) => {
        return Promise.reject(error.response)
    }
    return client(options).then(onSuccess).catch(onError)
}
