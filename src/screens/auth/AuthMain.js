import {View, Text} from "react-native";
import {AuthButton} from "../../components/authScreens/AuthButton";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export function AuthMain({navigation}) {
    const handleSignupPress = () => {
        navigation.navigate('Signup');
    };
    const handleLoginPress = () => {
        navigation.navigate('Login');
    };
    return (
        <View className="flex-1 justify-center items-center">
            <View className="flex-[0.5] justify-center">
                <MaterialCommunityIcons name="spotify" size={150} color="white"/>
            </View>
            <View className=" justify-center items-center flex-[0.2]">
                <Text className="text-white text-2xl md:text-5xl">
                    DieC Team present
                </Text>
                <Text className="text-white text-2xl md:text-5xl">
                    When the deaf listen to music
                </Text>
            </View>
            <View className="space-y-2 mb-20 flex-[0.3] justify-end w-80 md:w-96">
                <View>
                    <AuthButton title="Signup free now" bgColor="#68E066" textColor="black"
                                onPress={handleSignupPress}/>
                </View>
                <View>
                    <AuthButton title="Continue with google" bgColor='#000000' border={1} borderColor='#FFFFFF'
                                icon={true}/>
                </View>
                <View>
                    <AuthButton title="Login" onPress={handleLoginPress}/>
                </View>
            </View>
        </View>
    );
}