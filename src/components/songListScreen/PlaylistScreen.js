import {Dimensions, Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useEffect, useState} from "react";
import {useRoute} from "@react-navigation/native";
import SongService from "../../services/song.service";
import Entypo from "react-native-vector-icons/Entypo";

const {width: windowWidth, height: windowHeight} = Dimensions.get('window');

export function PlaylistScreen() {
    const route = useRoute();
    const playlistId = route.params?.data;

    const [playlistInfo, setPlaylistInfo] = useState({})

    useEffect(() => {
        SongService.getPlaylist(playlistId)
            .then(result => {
                setPlaylistInfo(result.data["playlist"]);
            })
            .catch(e => {
                console.log(e)
            })
    }, []);

    return (
        <>
            <Image source={{uri: playlistInfo.avatar}} style={styles.Banner}/>
            <View className="ml-3">
               <View className="space-y-2 mt-5">
                   <Text className="text-white font-bold">Upload at {playlistInfo["uploadTime"] && playlistInfo["uploadTime"].slice(0, 10)}</Text>
                   <View className="flex-row space-x-3">
                       <Entypo name="spotify" size={20} color="green"/>
                       <Text className="text-white font-extrabold">Spotify</Text>
                   </View>
                   <Text className="text-white font-bold">
                       {playlistInfo["playlistLikeCounts"] ? playlistInfo["playlistLikeCounts"].length : 0} likes
                   </Text>
               </View>
                <View className="space-y-3 mt-9">
                    {playlistInfo?.songs &&
                        playlistInfo.songs.map(song => {
                                return (
                                    <TouchableOpacity key={song._id} className="flex-row">
                                        <Image source={{uri: song.avatar}} style={styles.songImage}/>
                                        <Text className="text-white self-center ml-3">{song["songName"]}</Text>
                                    </TouchableOpacity>
                                );
                            }
                        )
                    }
                </View>
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