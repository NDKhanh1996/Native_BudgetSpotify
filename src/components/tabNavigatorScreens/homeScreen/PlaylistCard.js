import {Image, Text, TouchableOpacity} from "react-native";

export function PlaylistCard({avatar, name}) {
    return (
        <TouchableOpacity className="mr-6">
            <Image source={avatar} className="aspect-square w-[140] md:w-[200]"/>
            <Text className="text-white text-center text-2xl mt-3">{name}</Text>
        </TouchableOpacity>
    );
}