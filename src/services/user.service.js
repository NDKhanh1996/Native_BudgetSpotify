import {axiosInstance} from "./axiosModifier/axiosModifier";
import {API_URL} from '@env';

class UserService {
    static async getOneSong(songId) {
        return await axiosInstance.get(API_URL + "user/songs/" + songId);
    }

    static async showCommentInSong(songId) {
        return await axiosInstance.get(API_URL + "user/songs/" + songId + "/comments");
    }

    static async addSong(data) {
        return await axiosInstance.post(API_URL + "user/songs", data);
    }

    static async addSongToPlaylist(playlistId, songId) {
        return await axiosInstance.post(API_URL + "user/playlists/" + playlistId + "/songs", {songId: songId});
    }

    static async removeSongFromPlaylist(playlistId, songId) {
        return await axiosInstance.delete(API_URL + `user/playlists/${playlistId}/songs/${songId}`);
    }

    static async commentOnSong(comment, songId) {
        return await axiosInstance.post(API_URL + `user/songs/${songId}/comments`, {comment: comment});
    }

    static async commentOnPlaylist(comment, playlistId) {
        return await axiosInstance.post(API_URL + `user/playlists/${playlistId}/comments`, {comment: comment});
    }

    static async deleteComment(commentId) {
        return await axiosInstance.delete(API_URL + "user/comments/" + commentId);
    }

    static async getSongs() {
        return await axiosInstance.get(API_URL + "user/songs");
    }

    static async likeSong(songId) {
        return await axiosInstance.patch(API_URL + "user/songs/" + songId + "/like");
    }

    static async dislikeSong(songId) {
        return await axiosInstance.patch(API_URL + "user/songs/" + songId + "/dislike")
    }

    static async likePlaylist(playlist) {
        return await axiosInstance.patch(API_URL + "user/playlists/" + playlist + "/like");
    }

    static async dislikePlaylist(playlist) {
        return await axiosInstance.patch(API_URL + "user/playlists/" + playlist + "/dislike");
    }

    static async getDetail(id) {
        return await axiosInstance.get(API_URL + "user/details/");
    }

    static async getPlaylist() {
        return await axiosInstance.get(API_URL + "user/playlists");
    }

    static async getSongInPlaylist(playlistId) {
        return await axiosInstance.get(API_URL + "user/playlists/" + playlistId + "/songs");
    }

    static async searchSong(playlistName) {
        return await axiosInstance.get(API_URL + "user/search/songs?name=" + playlistName);
    }

    static async editPassword(data) {
        return await axiosInstance.put(API_URL + "user/password", data);
    }

    static async editInfo(data) {
        return await axiosInstance.put(API_URL + "user/info", data);
    }

    static async deleteSong(data) {
        return await axiosInstance.delete(API_URL + "user/songs", {
            data: data,
        });
    }

    static async createPlaylist(data) {
        return await axiosInstance.post(API_URL + "/user/playlists/", data);
    }

    static async deletePlaylist(data) {
        return await axiosInstance.delete(API_URL + "/user/playlists", {
            data: data,
        });
    }

    static async editPlaylist(data) {
        return await axiosInstance.put(API_URL + "/user/playlists", data);
    }

    static async updateSongState(data) {
        return await axiosInstance.put(API_URL + "/user/songs/update-state", data);
    }

    static async editSong(data) {
        return await axiosInstance.put(API_URL + "/user/songs", data)
    }

    static async changeToSeen(notifyId) {
        return await axiosInstance.patch(API_URL + "/user/notifications/"+ notifyId +"/seen" );
    }
}

export default UserService;