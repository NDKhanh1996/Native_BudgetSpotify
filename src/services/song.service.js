import axios from "axios";
import {API_URL} from '@env';


class UserService {
    static async getSongs() {
        return await axios.get( API_URL + "/user/list/songs");
    }

    static async getOneSong(songId) {
        return await axios.get(API_URL + "/user/song/detail/" + songId);
    }

    static async addSong(data) {
        return await axios.post(API_URL + "/user/upload/song", data);
    }

    static async editPassword(data) {
        return await axios.put(API_URL + "/user/editpassword", data);
    }

    static async getInfo(id) {
        return await axios.get(API_URL + "/user/info/" + id);
    }

    static async editInfo(data) {
        return await axios.put(API_URL + "/user/editinfo",data);
    }

    static async deleteSong(data) {
        return await axios.delete(API_URL + "/user/song/delete", {
            data: data,
        });
    }

    static async getPlaylist() {
        return await axios.get(API_URL + "/user/playlist");
    }

    static async getSongInPlaylist(playlistId) {
        return await axios.get(API_URL + "/user/playlist/" + playlistId);
    }

    static async addPlayList(data) {
        return await axios.post(API_URL + "/user/playlist/create", data);
    }

    static async searchSong(playlistName, accessToken) {
        return await axios.get(API_URL + "/user/search?songName=${playlistName}");
    }

    static async addSongToPlaylist(playlistId, songId) {
        return await axios.post(API_URL + `/user/playlist/add-song/` + playlistId, {songId: songId});
    }

    static async removeSongFromPlaylist(playlistId, songId) {
        return await axios.post(API_URL + `/user/playlist/remove-song/` + playlistId, {songId: songId});
    }

    static async deletePlaylist(data) {
        return await axios.delete(API_URL + "/user/playlist/delete", {
            data: data,
        });
    }

    static async editPlaylist(data) {
        return await axios.put(API_URL + "/user/playlist/update", data);
    }

    static async updateSongState(data) {
        return await axios.put(API_URL + "/user/song/update-state", data);
    }

    static async editSong(data){
        return await axios.put(API_URL + "/user/song/update", data)
    }

    static async showCommentInSong(songId){
        return await axios.get(API_URL + "/user/song/show-comment/" + songId);
    }

    static async submitComment(comment, songId) {
        return await axios.post(API_URL + "/user/song/add-comment/" + songId, {comment: comment});
    }

    static async deleteComment(commentId) {
        return await axios.get(API_URL + "/user/song/delete-comment/" + commentId);
    }

    static async submitLikeOfSong(songId){
        return await axios.get(API_URL + "user/song/like/" + songId);
    }

    static async submitDislikeOfSong(songId){
        return await axios.get(API_URL + "/user/song/dislike/" + songId)
    }

    static async submitLikePlaylist(playlist){
        return await axios.get(API_URL + "/user/playlist/like/" + playlist);
    }

    static async submitDislikePlaylist(playlist){
        return await axios.get(API_URL + "/user/playlist/dislike/" + playlist);
    }
    static async submitCommentPlaylist(comment, playlistId) {
        return await axios.post(API_URL + "/user/playlist/add-comment/" + playlistId, {comment: comment});
    }

    static async changeToSeen(notifyId){
        return await axios.patch(API_URL + "/user/notify/change-to-seen/" + notifyId);
    }
}

export default UserService;