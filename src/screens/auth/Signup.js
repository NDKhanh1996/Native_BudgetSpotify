import {View, Text, TextInput} from "react-native";

export function Signup() {
    return (
        <View className="flex-1 text-white justify-center items-center">
            <Text className="text-white text-2xl md:text-5xl">
                Sign up for free to start listening
            </Text>
            <TextInput classname="border-2 border-white"
                style={{ borderColor: 'gray', borderWidth: 1, padding: 10 }}
                placeholder="Enter text..."
            />
        </View>
    );
}