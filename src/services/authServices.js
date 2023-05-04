
import { request } from '../utils/requestProcessor';
export default class AuthServices {
    static async getUserDetails(queryString) {
        return await request({
            url: `/auth?code=${queryString}`,
            method:"GET"
        })
    }
    static async getUpdatedUserDetails(email) {
        return await request({
            url: `/users/get-user?email=${email}`,
            method:"GET"
        })
    }
}   