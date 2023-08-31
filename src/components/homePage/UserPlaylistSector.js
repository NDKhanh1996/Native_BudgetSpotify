import {Text, TouchableOpacity} from "react-native";

export function UserPlaylistSector() {
    return(
        <TouchableOpacity style={[styles.button, { borderRadius: 5 }]}>
            <Text style={styles.buttonText}> </Text>
        </TouchableOpacity>
    );
}