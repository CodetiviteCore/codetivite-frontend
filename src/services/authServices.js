
import { request } from '../utils/requestProcessor';
export default class AuthServices {
    static async getUserDetails(queryString) {
        return await request({
            url: `/api/v1.0/auth?code=${queryString}`,
            method:"GET"
        })
    }
}   