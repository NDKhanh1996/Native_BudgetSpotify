import {View, Text, TextInput} from "react-native";
import {SignupButton} from "../../components/authScreens/signup/SignupButton";

export function Signup() {
    return (
        <View className="flex-1">
            <View className="flex-1 text-white justify-center items-center">
                <Text className="text-white text-2xl md:text-5xl">
                    Sign up for free to start listening
                </Text>
                <View className="space-y-3 w-64 md:w-96 mt-4">
                    <TextInput
                        style={inputStyle}
                        placeholder="input your name"
                        placeholderTextColor="white"
                    />
                    <TextInput
                        style={inputStyle}
                        placeholder="input your password"
                        placeholderTextColor="white"
                    />
                    <TextInput
                        style={inputStyle}
                        placeholder="Confirm password"
                        placeholderTextColor="white"
                    />
                </View>
                <View className="mt-5 w-64 md:w-96">
                    <SignupButton title="Signup" bgColor='#68E066'/>
                </View>
            </View>
        </View>
    );
}

const inputStyle = {
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    color: 'white'
};