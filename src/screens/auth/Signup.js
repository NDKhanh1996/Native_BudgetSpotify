import {View, Text, TextInput} from "react-native";
import {Keyboard, TouchableWithoutFeedback} from 'react-native';
import {AuthButton} from "../../components/authScreens/AuthButton";
import {PasswordInput} from "../../components/authScreens/PasswordInput";

export function Signup() {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View className="flex-1 text-white justify-center items-center">
                <Text className="text-white text-2xl md:text-5xl">
                    Signup for free to start listening
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
                    <View>
                        <PasswordInput placeholderValue="Confirm password"/>
                    </View>

                </View>
                <View className="mt-5 w-64 md:w-96">
                    <AuthButton title="Signup" bgColor='#68E066'/>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const inputStyle = {
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    color: 'white'
};