
import { request } from '../utils/requestProcessor';
export default class DashboardServices {
    static async getDashboardDetails() {
        return await request({
            url: `/dashboard`,
            method:"GET"
        })
    }

}   