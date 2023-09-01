import {StyleSheet, Text, TouchableOpacity} from "react-native";

export function SignupButton(props) {
    const styles = StyleSheet.create({
        button: {
            backgroundColor: props.bgColor,
            padding: 10,
            alignItems: 'center',
            height: 50,
            justifyContent: "center",
        },
    });

    return (
        <TouchableOpacity style={[styles.button, {borderRadius: 120}]} className="flex-row" onPress={props.onPress}>
            <Text style={{color: "white"}}>{props.title}</Text>
        </TouchableOpacity>
    );
}