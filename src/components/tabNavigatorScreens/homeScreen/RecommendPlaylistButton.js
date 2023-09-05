import {StyleSheet, Text, TouchableOpacity, Image, View} from "react-native";

export function RecommendPlaylistButton(props) {
    return (
        <TouchableOpacity style={styles.button}>
            {props.img && (
                <Image source={props.img} style={styles.image} />
            )}
            <Text style={styles.buttonText}>{props.title} </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        display: "flex",
        backgroundColor: '#2A2A2A',
        alignItems: 'center',
        height: 50,
        justifyContent: "center",
        flexDirection: "row",
        borderRadius: 5,
    },
    image: {
        width: 50,
        height: 50,
        resizeMode: "contain",
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
    },
    buttonText: {
        color: 'white',
        margin: 10
    },
});