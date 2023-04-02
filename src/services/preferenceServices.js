import { request } from '../utils/requestProcessor';
export default class PreferenceServices {
    static async getPreferences() {
        console.log("nneka")
        return await request({
            url: `users/career-path`,
            method:"GET"
        })
    }
}   