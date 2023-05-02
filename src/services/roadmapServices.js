import axios from 'axios';
import { request } from '../utils/requestProcessor';
export default class RoadmapServices {

    static async getDocument(downloadLink) {
        console.log(downloadLink, "opo")
        return axios.get(`${downloadLink}`)
    }

    static async getProjectsDueForSyllabus(roadMap, level) {
        if (level === "Fresher") {
            level = "Junior"
        }
        return await request({
            url: `project?roadmap=${roadMap}&skillLevel=${level}`,
            method: "GET"
        })
    }
    static async updateSyllablus(complete) {
        const data = { ...complete }
        return await request({
            url: `project/me`,
            method: "PUT",
            data:data
        })
    }
    static async getCompletedSyllablus() {
        return await request({
            url: `project/me`,
            method: "GET",
        })
    }
}   