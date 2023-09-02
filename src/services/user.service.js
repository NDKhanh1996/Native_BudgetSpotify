import axios from "axios";
import {API_URL} from '@env';

class UserService {
    static async getOneSong(songId) {
        return await axios.get(API_URL + "/user/songs/" + songId);
    }

    static async showCommentInSong(songId) {
        return await axios.get(API_URL + "/user/songs/" + songId + "/comments");
    }

    static async addSong(data) {
        return await axios.post(API_URL + "/user/songs", data);
    }

    static async addSongToPlaylist(playlistId, songId) {
        return await axios.post(API_URL + "/user/playlists/" + playlistId + "/songs", {songId: songId});
    }

    static async removeSongFromPlaylist(playlistId, songId) {
        return await axios.delete(API_URL + `/user/playlists/${playlistId}/songs/${songId}`);
    }

    static async commentOnSong(comment, songId) {
        return await axios.post(API_URL + `/user/songs/${songId}/comments`, {comment: comment});
    }

    static async commentOnPlaylist(comment, playlistId) {
        return await axios.post(API_URL + `/user/playlists/${playlistId}/comments`, {comment: comment});
    }

    static async deleteComment(commentId) {
        return await axios.delete(API_URL + "/user/comments/" + commentId);
    }

    static async getSongs() {
        return await axios.get(API_URL + "/user/songs");
    }

    static async likeSong(songId) {
        return await axios.patch(API_URL + "/user/songs/" + songId + "/like");
    }

    static async dislikeSong(songId) {
        return await axios.patch(API_URL + "/user/songs/" + songId + "/dislike")
    }

    static async likePlaylist(playlist) {
        return await axios.patch(API_URL + "/user/playlists/" + playlist + "/like");
    }

    static async dislikePlaylist(playlist) {
        return await axios.patch(API_URL + "/user/playlists/" + playlist + "/dislike");
    }

    static async getDetail(id) {
        return await axios.get(API_URL + "/user/details/");
    }

    static async getPlaylist() {
        return await axios.get(API_URL + "/user/playlists");
    }

    static async getSongInPlaylist(playlistId) {
        return await axios.get(API_URL + "/user/playlists/" + playlistId + "/songs");
    }

    static async searchSong(playlistName) {
        return await axios.get(API_URL + "/user/search/songs?name=" + playlistName);
    }

    static async editPassword(data) {
        return await axios.put(API_URL + "/user/password", data);
    }

    static async editInfo(data) {
        return await axios.put(API_URL + "/user/info", data);
    }

    static async deleteSong(data) {
        return await axios.delete(API_URL + "/user/songs", {
            data: data,
        });
    }

    static async createPlaylist(data) {
        return await axios.post(API_URL + "/user/playlists/", data);
    }

    static async deletePlaylist(data) {
        return await axios.delete(API_URL + "/user/playlists", {
            data: data,
        });
    }

    static async editPlaylist(data) {
        return await axios.put(API_URL + "/user/playlists", data);
    }

    static async updateSongState(data) {
        return await axios.put(API_URL + "/user/songs/update-state", data);
    }

    static async editSong(data) {
        return await axios.put(API_URL + "/user/songs", data)
    }

    static async changeToSeen(notifyId) {
        return await axios.patch(API_URL + "/user/notifications/"+ notifyId +"/seen" );
    }
}

export default UserService;