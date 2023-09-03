import {TextInput, TouchableOpacity, View} from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import {useState} from "react";

export function PasswordInput({placeholderValue, onChangeText}) {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <View className="flex-row">
            <TextInput
                style={{flex: 1, ...inputStyle}}
                placeholder={placeholderValue}
                placeholderTextColor="white"
                secureTextEntry={!showPassword}
                autoCapitalize="none"
                onChangeText={onChangeText}
            />
            <TouchableOpacity className="absolute right-2 self-center" onPress={() => {
                setShowPassword(!showPassword)
            }}>
                {showPassword ? (
                    <Entypo name="eye-with-line" size={30} color="#fff"/>
                ) : (
                    <Entypo name="eye" size={30} color="#fff"/>
                )}
            </TouchableOpacity>
        </View>
    );
}

const inputStyle = {
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    color: 'white',
};