import {View, Text, TextInput} from "react-native";
import {Keyboard, TouchableWithoutFeedback} from 'react-native';
import {AuthButton} from "../../components/authScreens/AuthButton";
import {useState} from "react";
import {PasswordInput} from "../../components/authScreens/PasswordInput";
import {AuthService} from "../../services/auth.service";

export function Login({navigation}) {
    const [wrongInfo, setWrongInfo] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        try {
            await AuthService.jwtLogin({username, password});
            navigation.navigate("Home");
        } catch (e) {
            console.log(e)
            setWrongInfo(true);
        }
    }

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
                        onChangeText={(text) => setUsername(text)}
                        autoCapitalize="none"
                    />
                    <View>
                        <PasswordInput
                            placeholderValue="Input your password"
                            onChangeText={(text) => setPassword(text)}
                        />
                    </View>
                    {wrongInfo && (
                        <Text className="text-red-700">
                            The Username or Password is Incorrect
                        </Text>
                    )}
                </View>
                <View className="mt-5 w-64 md:w-96">
                    <AuthButton title="Login" bgColor='#68E066' onPress={handleLogin}/>
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