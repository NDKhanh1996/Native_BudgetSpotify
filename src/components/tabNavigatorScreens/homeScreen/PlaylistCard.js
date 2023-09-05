import {Image, StyleSheet, Text, TouchableOpacity} from "react-native";

export function PlaylistCard({avatar, name}) {
    return(
        <TouchableOpacity className="aspect-square w-[140] md:w-[200] mr-6">
            <Image source={avatar} style={styles.image}/>
            <Text className="text-white text-center">{name}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    playlistCard: {
        width: 200,
        height: 200,
    },
    image: {
        width: "100%",
        height: "100%",
    },
})