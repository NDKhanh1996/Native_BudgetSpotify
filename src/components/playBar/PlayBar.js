import {View, Text, TouchableOpacity} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import {useState} from "react";

export function PlayBar() {
    const [isPlaying, setIsPlaying] = useState(false)

    const handlePlayButton = () => {
        setIsPlaying(!isPlaying)
    }
    return(
        <View className="text-white h-14 mb-0.5 justify-center bg-zinc-800/90" >
            <TouchableOpacity className="items-end mr-2" onPress={handlePlayButton}>
                {!isPlaying ? (
                    <Ionicons name="play" size={30} color={"white"}/>
                ) : (
                    <Ionicons name="pause" size={30} color={"white"}/>
                )}
            </TouchableOpacity>
        </View>
    );
}