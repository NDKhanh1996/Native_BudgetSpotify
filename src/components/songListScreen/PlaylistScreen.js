import {Dimensions, Image, StyleSheet, Text, TouchableOpacity, TouchableOpacityComponent, View} from "react-native";
import {useEffect, useState} from "react";
import {useRoute} from "@react-navigation/native";
import SongService from "../../services/song.service";

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