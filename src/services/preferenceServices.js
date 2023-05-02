import { request } from '../utils/requestProcessor';
export default class PreferenceServices {
    
    static async getPreferences() {
        return await request({
            url: `users/career-path`,
            method:"GET"
        })
    }
    
    static async getSelectedPreferences() {
        
        return await request({
            url: `roadmap/me`,
            method:"GET"
        })
    }

    static async updateCareerPath(careerPath) {
        const data = {
            careerPath: careerPath
        }
        return await request({
            url: `users/career-path?careerPath=${careerPath}`,
            method: "PUT",
            data:data
        })
    }
}   