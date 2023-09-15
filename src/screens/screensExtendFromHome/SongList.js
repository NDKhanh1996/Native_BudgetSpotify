import {Image, ScrollView, Text} from "react-native";

export function SongList({route}) {
    const {title, img} = route.params;
    return(
        <ScrollView className="flex space-y-8">
            <Image source={img} className="w-[100%] h-48 md:h-72 relative top-[-99]"/>
            <Text className="text-white">{title}</Text>
        </ScrollView>
    );
}