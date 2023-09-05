import {TouchableOpacity, StyleSheet, Text} from "react-native";

export function CategoriesButton(props) {
    return (
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>{props.title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#2A2A2A',
        padding: 10,
        alignItems: 'center',
        borderRadius: 500,
    },
    buttonText: {
        color: 'white',
    },
});