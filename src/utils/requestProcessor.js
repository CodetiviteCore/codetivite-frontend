import axios from "axios"
import { BASE_URL } from "./urls"


//axios client
const client = (() => {
    return axios.create({
        baseURL: BASE_URL
    })
})()

//request Processor
export const request = async (options) => {
    //handle success
    const onSuccess = (response) => {
        return response.data
    }
    const onError = (error) => {
        return Promise.reject(error.response)
    }
    return client(options).then(onSuccess).catch(onError)
}