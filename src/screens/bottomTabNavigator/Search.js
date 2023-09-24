import {
    Dimensions,
    Image,
    Keyboard,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View
} from "react-native";
import {useEffect, useState} from "react";
import SongService from "../../services/song.service";

const {width: windowWidth, height: windowHeight} = Dimensions.get('window');

export function Search({navigation}) {
    const [songName, setSongName] = useState("");
    const [songData, setSongData] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const response = await SongService.searchSong(songName);
                setSongData(response.data.songs);
            } catch (e) {
                navigation.navigate("AuthMain");
                console.log(e.message);
            }
        })();
    }, [songName]);

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View className="w-screen p-2 mt-2">
                <TextInput
                    placeholder="Search"
                    placeholderTextColor="white"
                    onChangeText={(text) => setSongName(text)}
                    autoCapitalize="none"
                    className="rounded-full border-gray-500 border-2 p-3 text-white"
                />
                <ScrollView className="space-y-3 mt-9">
                    {songData?.map(song => {
                            return (
                                <TouchableOpacity key={song["_id"]} className="flex-row"
                                    // onPress={() => (handleGetSongToPlayBar(song))}
                                >
                                    <Image source={{uri: song.avatar}} style={styles.songImage}/>
                                    <Text className="text-white self-center ml-3">{song["songName"]}</Text>
                                </TouchableOpacity>
                            );
                        }
                    )}
                </ScrollView>
            </View>
        </TouchableWithoutFeedback>
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