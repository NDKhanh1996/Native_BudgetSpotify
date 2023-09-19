import {Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useEffect, useState} from "react";
import {useRoute} from "@react-navigation/native";
import SongService from "../../services/song.service";
import Entypo from "react-native-vector-icons/Entypo";
import {PlayBar} from "../playBar/PlayBar";
import Ionicons from "react-native-vector-icons/Ionicons";
import {useDispatch} from "react-redux";
import {setCurrentSong, setListSong} from "../../redux/feature/songQueueSlice";

const {width: windowWidth, height: windowHeight} = Dimensions.get('window');

export function PlaylistScreen() {
    const dispatch = useDispatch();
    const route = useRoute();
    const {id, entity} = route.params;
    const [playlistInfo, setPlaylistInfo] = useState({
        avatar: null,
        description: null,
        playlistLikeCounts: null,
        playlistName: null,
        songs: null,
        uploadTime: null,
        uploader: null,
        _id: null
    });

    useEffect(() => {
        SongService.getPlaylist(id)
            .then(result => {
                setPlaylistInfo(result.data["playlist"]);
            })
            .catch(e => {
                console.log(e);
            })
    }, []);

    const handleGetPlaylistToPlayBar = () => {
        dispatch(setListSong(playlistInfo["songs"]));
        dispatch(setCurrentSong(playlistInfo["songs"][0]));
    }

    return (
        <>
            <Image source={{uri: playlistInfo.avatar}} style={styles.Banner}/>
            <View className="ml-3">
                <View className="flex-row justify-between">
                    <View className="space-y-2 mt-5">
                        <Text className="text-white font-bold">
                            Upload at {playlistInfo["uploadTime"] && playlistInfo["uploadTime"].slice(0, 10)}
                        </Text>
                        <View className="flex-row space-x-3">
                            <Entypo name="spotify" size={20} color="green"/>
                            <Text className="text-white font-extrabold">Spotify</Text>
                        </View>
                        <View>
                            <Text className="text-white font-bold">
                                {playlistInfo["playlistLikeCounts"] ? playlistInfo["playlistLikeCounts"].length : 0} likes
                            </Text>
                        </View>
                    </View>
                    <TouchableOpacity className="self-center rounded-full bg-[#68E066] p-3 mr-3"
                                      onPress={handleGetPlaylistToPlayBar}>
                        <Ionicons name="play" size={30} color={"white"}/>
                    </TouchableOpacity>
                </View>
                <ScrollView className="space-y-3 mt-9">
                    {playlistInfo.songs?.map(song => {
                            return (
                                <TouchableOpacity key={song["_id"]} className="flex-row">
                                    <Image source={{uri: song.avatar}} style={styles.songImage}/>
                                    <Text className="text-white self-center ml-3">{song["songName"]}</Text>
                                </TouchableOpacity>
                            );
                        }
                    )}
                </ScrollView>
            </View>
            <View className="absolute bottom-0 border-transparent w-screen">
                <PlayBar id={id} entity={entity}/>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    Banner: {
        height: windowHeight * 0.2,
        width: windowWidth
    },
    songImage: {
        aspectRatio: 1,
        width: windowWidth * 0.15
    }
});