import {StyleSheet, Text, TouchableOpacity} from "react-native";

export function RecommendPlaylistButton(props) {
    return(
        <TouchableOpacity style={[styles.button, { borderRadius: 5 }]}>
            <Text style={styles.buttonText}>{props.title} </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#2A2A2A',
        padding: 10,
        alignItems: 'center',
        height: 50,
        justifyContent: "center"
    },
    buttonText: {
        color: 'white',
    },
});