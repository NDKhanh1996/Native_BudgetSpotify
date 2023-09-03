import axios from "axios";
import {API_URL} from '@env';

class AdminService {
    static async getUserList() {
        return await axios.get(API_URL + "admin/user-list");
    }

    static async getSingers() {
        return await axios.get(API_URL + "admin/singers");
    }

    static async getComposers() {
        return await axios.get(API_URL + 'admin/composers');
    }

    static async getTags() {
        return await axios.get(API_URL + 'admin/tags');
    }

    static async addSinger(data) {
        return await axios.post(API_URL + 'admin/singers', data);
    }

    static async deleteSinger(id) {
        return await axios.delete(API_URL + 'admin/singers/' + id);
    }

    static async addComposer(data) {
        return await axios.post(API_URL + 'admin/composers', data);
    }

    static async deleteComposer(id) {
        return await axios.delete(API_URL + 'admin/composers/' + id);
    }

    static async addTag(data) {
        return await axios.post(API_URL + 'admin/tags', data);
    }

    static async deleteTag(id) {
        return await axios.delete(API_URL + 'admin/tags/' + id);
    }
}

export default AdminService