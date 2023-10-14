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

    static async updateCareerPath(data) {
        const {careerPath, firstname, lastname} = data
        return await request({
            url: `users/career-path/?firstName=${firstname}&lastName=${lastname}&careerPath=${careerPath}`,
            method: "PUT",
        })
    }
}   