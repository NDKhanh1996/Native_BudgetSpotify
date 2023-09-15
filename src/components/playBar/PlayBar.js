import {View, TouchableOpacity} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import {useEffect, useRef, useState} from "react";
import {Audio} from 'expo-av';

export function PlayBar() {
    const [isPlaying, setIsPlaying] = useState(false);
    const sound = useRef();

    async function playSound() {
        if (!sound.current) {
            const { sound: newSound } = await Audio.Sound.createAsync({
                uri: 'https://firebasestorage.googleapis.com/v0/b/budget-spotify-f7142.appspot.com/o/songs%2FALoi-Double2TMasew-10119691.mp3?alt=media&token=c12084d9-2d09-4e0b-a242-7f48c5780061'
            });
            sound.current = newSound;
        }
        setIsPlaying(true);
        await sound.current.playAsync();
    }

    async function pauseSound() {
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
        <View className="text-white h-14 mb-0.5 justify-center bg-zinc-800/90" >
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