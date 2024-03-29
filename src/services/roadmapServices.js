import axios from 'axios';
import { request } from '../utils/requestProcessor';
export default class RoadmapServices {

    static async getDocument(downloadLink) {
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
            data: data
        })
    }
    static async getCompletedSyllablus() {
        return await request({
            url: `project/me`,
            method: "GET",
        })
    }
    static async getProgressPercentage(careerPath, level, projectId) {
        return await request({
            url: `roadmap/me/progress?roadmap=${careerPath}&skillLevel=${level}&projectId=${projectId}`,
            method: "GET",
        })
    }

    static async getLevelDetails(careerPath, level) {
        return await request({
            url: `roadmap/?careerPath=${careerPath}&level=${level}`,
        })
    }
}   