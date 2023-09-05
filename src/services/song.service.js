import axios from "axios";
import {API_URL} from '@env';


class SongService {
    static async getPlaylist(playlistId) {
        return await axios.get(API_URL + `song/playlists/${playlistId}`);
    }

    static async getAllSongs() {
        return await axios.get(API_URL + 'song/songs');
    }

    static async searchSong(songName) {
        return await axios.get(API_URL + `song/songs/search?search=${songName}`);
    }

    static async createRandomSong(songIDs) {
        return await axios.post(API_URL + 'song/random-songs', songIDs);
    }

    static async getAllSingers() {
        return await axios.get(API_URL + 'song/singers');
    }

    static async getAllComposers() {
        return await axios.get(API_URL + 'song/composers');
    }

    static async getAllTags() {
        return await axios.get(API_URL + 'song/tags');
    }

    static async getAllPlaylistPublic(){
        return await axios.get(API_URL + 'song/playlists');
    }
}

export default SongService;