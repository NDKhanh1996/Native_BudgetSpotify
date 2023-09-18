import {View, TouchableOpacity, Image, Text} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import {useEffect, useRef, useState} from "react";
import {Audio} from 'expo-av';
import SongService from "../../services/song.service";
import {useDispatch,useSelector} from 'react-redux'
import {setListSong} from "../../redux/feature/songQueueSlice";

export function PlayBar({id, entity}) {
    const [isPlaying, setIsPlaying] = useState(false);
    const sound = useRef();
    const [songArray, setSongArray] = useState([]);
    const [songData, setSongData] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (entity === "playlist") {
                    const data = await SongService.getPlaylist(id);
                    dispatch(setListSong(data.data["playlist"]["songs"]));
                    setSongArray(data.data["playlist"]["songs"]);
                    if (!songData) {
                        setSongData(data.data["playlist"]["songs"][0]);
                    }
                }
            } catch (e) {
                console.error(e);
            }
        };

        fetchData().then();
    }, []);


    const playSound = async () => {
        try {
            if (!sound.current && songArray.length > 0) {
                const soundPromises = songArray.map(async (song) => {
                    const {sound: newSound} = await Audio.Sound.createAsync({
                        uri: song["fileURL"],
                    });
                    return newSound;
                });

                const newSounds = await Promise.all(soundPromises);
                sound.current = newSounds[0];

                setIsPlaying(true);
                await sound.current.playAsync();
            } else {
                setIsPlaying(true);
                await sound.current.playAsync();
            }
        } catch (error) {
            console.error(error);
        }
    };


    const pauseSound = async () => {
        if (sound.current) {
            await sound.current.pauseAsync();
            setIsPlaying(false);
        }
    }

    useEffect(() => {
        return sound.current
            ? () => {
                console.log('Unloading Sound');
                sound.current.unloadAsync();
            }
            : undefined;
    }, [sound]);

    return (
        songData && (
            <View className="h-14 mb-0.5 bg-zinc-800/90 flex-row justify-between">
                <Image className="h-full aspect-square" source={{uri: songData.avatar}}/>
                <Text className="text-white self-center">{songData["songName"]}</Text>
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