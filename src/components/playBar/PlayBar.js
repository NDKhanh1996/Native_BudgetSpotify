import {View, TouchableOpacity, Image, Text} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import {useEffect, useRef, useState} from "react";
import {Audio} from 'expo-av';
import SongService from "../../services/song.service";
import {useDispatch, useSelector} from 'react-redux'
import {setCurrentSong, setListSong} from "../../redux/feature/songQueueSlice";

const soundObject = new Audio.Sound();
let songIndex = 0;

export function PlayBar({id, entity}) {
    const [isPlaying, setIsPlaying] = useState(false);
    const dispatch = useDispatch();
    const songArray = useSelector(state => state.songQueue.listSong);
    const currentSong = useSelector(state => state.songQueue.currentSong);

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (entity === "playlist") {
                    const response = await SongService.getPlaylist(id);
                    dispatch(setListSong(response.data["playlist"]["songs"]));
                    if (!currentSong) {
                        dispatch(setCurrentSong(response.data["playlist"]["songs"][0]));
                    }
                }
            } catch (e) {
                console.error(e);
            }
        };

        fetchData().then();
    }, []);

    async function playSound() {
        setIsPlaying(true);
        if (songIndex < songArray.length) {
            try {
                const status = await soundObject.getStatusAsync();
                if (!status.isLoaded) {
                    const song = songArray[songIndex];
                    await soundObject.loadAsync({ uri: song["fileURL"] });
                    dispatch(setCurrentSong(song));
                }
                await soundObject.playAsync();
            } catch (error) {
                console.log(error);
            }
        } else {
            console.log("out of list song")
            setIsPlaying(false);
        }
    }

    soundObject.setOnPlaybackStatusUpdate(async playbackStatus => {
        try {
            if (playbackStatus.didJustFinish && !playbackStatus.isLooping) {
                songIndex++;
                await soundObject.unloadAsync();
                await playSound();
            }
        } catch (error) {
            console.log(error);
        }
    });

    async function pauseSound() {
        try {
            await soundObject.pauseAsync();
            setIsPlaying(false);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        currentSong && (
            <View className="h-14 mb-0.5 bg-zinc-800/90 flex-row justify-between">
                <Image className="h-full aspect-square" source={{uri: currentSong.avatar}}/>
                <Text className="text-white self-center">{currentSong["songName"]}</Text>
                <TouchableOpacity className="mr-2 self-center" onPress={!isPlaying ? playSound : pauseSound}>
                    {!isPlaying ? (
                        <Ionicons name="play" size={30} color={"white"}/>
                    ) : (
                        <Ionicons name="pause" size={30} color={"white"}/>
                    )}
                </TouchableOpacity>
            </View>
        )
    );
}