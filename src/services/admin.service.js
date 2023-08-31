import axios from "axios";
import {API_URL} from '@env';

class AdminService {
    static async getUserList() {
        return await axios.get(API_URL + "/admin/userlist")
    }
    static async getSingers(){
        return await axios.get(API_URL + "/admin/singers")
    }
    static async getComposers(){
        return await axios.get(API_URL + '/admin/composers')
    }
    static async getTags(){
        return await axios.get(API_URL + '/admin/tags')
    }
    static async addSinger(data){
        return await axios.post(API_URL + '/admin/addsinger',data)
    }
    static async deleteSinger(id){
        return await axios.delete(API_URL + '/admin/deletesinger/'+id)
    }
    static async addComposer(data){
        return await axios.post(API_URL + '/admin/addcomposer',data)
    }
    static async deleteComposer(id){
        return await axios.delete(API_URL + '/admin/deletecomposer/'+id)
    }
    static async addTag(data){
        return await axios.post(API_URL + '/admin/addtag',data)
    }
    static async deleteTag(id){
        return await axios.delete(API_URL + '/admin/deletetag/'+id)
    }

}

export default AdminService