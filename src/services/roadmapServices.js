import axios from 'axios';
export default class RoadmapServices {
    
    static async getDocument(downloadLink) {
        console.log(downloadLink, "opo")
        return axios.get(`${downloadLink}`)
    }
}   