import {View, Text, TextInput} from "react-native";
import {Keyboard, TouchableWithoutFeedback} from 'react-native';
import {AuthButton} from "../../components/authScreens/AuthButton";
import {PasswordInput} from "../../components/authScreens/PasswordInput";
import {useState} from "react";
import {AuthService} from "../../services/auth.service";

export function Signup({navigation}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSignup = async () => {
        try {
            await AuthService.register({username, password});
            navigation.navigate("Login");
        } catch (e) {
            console.log(e)
        }
    }

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
                        onChangeText={(text) => setUsername(text)}
                        autoCapitalize="none"
                    />
                    <View>
                        <PasswordInput
                            placeholderValue="Input your password"
                            onChangeText={(text) => setPassword(text)}
                        />
                    </View>
                    <View>
                        <PasswordInput
                            placeholderValue="Confirm password"
                            onChangeText={(text) => setConfirmPassword(text)}
                        />
                        {password !== confirmPassword && (
                            <Text className="text-red-700">
                                Passwords must match
                            </Text>
                        )}
                    </View>
                </View>
                <View className="mt-5 w-64 md:w-96">
                    <AuthButton title="Signup" bgColor='#68E066' onPress={handleSignup}/>
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