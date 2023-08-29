import {TouchableOpacity, StyleSheet, Text} from "react-native";

export function CategoriesButton(props) {
    return(
        <TouchableOpacity style={[styles.button, { borderRadius: 500 }]}>
            <Text style={styles.buttonText}>{props.title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#2A2A2A',
        padding: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
    },
});