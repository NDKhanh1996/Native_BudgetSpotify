import {View, TouchableOpacity} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import {useEffect, useRef, useState} from "react";
import {Audio} from 'expo-av';
import SongService from "../../services/song.service";

export function PlayBar({id, entity}) {
    const [isPlaying, setIsPlaying] = useState(false);
    const sound = useRef();
    const [songArray, setSongArray] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (entity === "playlist") {
                    const data = await SongService.getPlaylist(id);
                    setSongArray(data.data["playlist"]["songs"]);
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
                    const { sound: newSound } = await Audio.Sound.createAsync({
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

    return(
        <View className="text-white h-14 mb-0.5 justify-center bg-zinc-800/90">
            <TouchableOpacity className="items-end mr-2" onPress={!isPlaying ? playSound : pauseSound}>
                {!isPlaying ? (
                    <Ionicons name="play" size={30} color={"white"}/>
                ) : (
                    <Ionicons name="pause" size={30} color={"white"}/>
                )}
            </TouchableOpacity>
        </View>
    );
}