import {View, Text, TextInput, TouchableOpacity} from "react-native";
import {Keyboard, TouchableWithoutFeedback} from 'react-native';
import {AuthButton} from "../../components/authScreens/AuthButton";
import {useState} from "react";
import Entypo from "react-native-vector-icons/Entypo";
import {PasswordInput} from "../../components/authScreens/PasswordInput";

export function Login() {
    const [wrongInfo, setWrongInfo] = useState(false);
    // const [showPassword, setShowPassword] = useState(false);

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View className="flex-1 justify-center items-center">
                <Text className="text-white text-2xl md:text-5xl">
                    Login to start listening
                </Text>
                <View className="space-y-3 w-64 md:w-96 mt-4">
                    <TextInput
                        style={inputStyle}
                        placeholder="Input your name"
                        placeholderTextColor="white"
                    />
                    <View>
                        <PasswordInput placeholderValue="Input your password"/>
                    </View>
                    {wrongInfo && (
                        <Text className="text-red-700">
                            The Username or Password is Incorrect
                        </Text>
                    )}
                </View>
                <View className="mt-5 w-64 md:w-96">
                    <AuthButton title="Login" bgColor='#68E066'/>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const inputStyle = {
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    color: 'white',
};