import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

export function AuthButton(props) {
    const styles = StyleSheet.create({
        button: {
            backgroundColor: props.bgColor,
            padding: 10,
            alignItems: 'center',
            height: 50,
            justifyContent: "center",
            borderColor: props.borderColor || null,
            borderWidth: props.border || 0,
        },
        buttonText: {
            color: props.textColor || "white",
        },
    });

    return (
        <TouchableOpacity style={[styles.button, {borderRadius: 120}]} onPress={props.onPress}>
            {props.icon ? (
                <View className="flex-row">
                    <View>
                        <AntDesign name="google" size={20} color="white"/>
                    </View>
                    <View className="flex-1 items-center">
                        <Text style={styles.buttonText}>{props.title}</Text>
                    </View>
                </View>
            ) : (
                <View>
                    <Text style={styles.buttonText}>{props.title}</Text>
                </View>
            )}
        </TouchableOpacity>
    );
}