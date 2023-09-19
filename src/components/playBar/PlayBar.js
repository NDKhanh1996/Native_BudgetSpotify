import {Image, Text, TouchableOpacity, View} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import {useEffect, useState} from "react";
import {Audio} from 'expo-av';
import {useDispatch, useSelector} from 'react-redux'
import {setCurrentSong} from "../../redux/feature/songQueueSlice";
import {setSongRunning} from "../../redux/feature/songStateSlice";

const soundObject = new Audio.Sound();
let songIndex = 0;

export function PlayBar({id, entity}) {
    const dispatch = useDispatch();
    const songArray = useSelector(state => state.songQueue.listSong);
    const currentSong = useSelector(state => state.songQueue.currentSong);
    const songRunning = useSelector(state => state.songState.songRunning);

    async function playSound() {
        dispatch(setSongRunning(true));
        if (songIndex < songArray.length) {
            try {
                const status = await soundObject.getStatusAsync();
                if (!status.isLoaded) {
                    const song = songArray[songIndex];
                    await soundObject.loadAsync({uri: song["fileURL"]});
                    dispatch(setCurrentSong(song));
                }
                await soundObject.playAsync();
            } catch (error) {
                console.log(error);
            }
        } else {
            dispatch(setSongRunning(false));
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
            dispatch(setSongRunning(false));
        } catch (error) {
            console.log(error);
        }
    }

    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        if (hasMounted) {
            (async () => {
                try {
                    await soundObject.unloadAsync();
                    dispatch(setSongRunning(false));
                } catch (error) {
                    console.log(error);
                }
            })();
        } else {
            setHasMounted(true);
        }
    }, [currentSong]);

    return (
        currentSong && (
            <View className="h-14 mb-0.5 bg-zinc-800/90 flex-row justify-between">
                <Image className="h-full aspect-square" source={{uri: currentSong.avatar}}/>
                <Text className="text-white self-center">{currentSong["songName"]}</Text>
                <TouchableOpacity className="mr-2 self-center" onPress={!songRunning ? playSound : pauseSound}>
                    {!songRunning ? (
                        <Ionicons name="play" size={30} color={"white"}/>
                    ) : (
                        <Ionicons name="pause" size={30} color={"white"}/>
                    )}
                </TouchableOpacity>
            </View>
        )
    );
}