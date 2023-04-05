import { request } from '../utils/requestProcessor';
export default class PreferenceServices {
    
    static async getPreferences() {
        return await request({
            url: `users/career-path`,
            method:"GET"
        })
    }
    static async getSelectedPreferences(careerPath) {
        
        return await request({
            url: `roadmap?careerPath=${careerPath}`,
            method:"GET"
        })
    }
    
}   