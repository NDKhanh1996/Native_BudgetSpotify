import {Text, View} from "react-native";
import Fontisto from "react-native-vector-icons/Fontisto";
import Feather from "react-native-vector-icons/Feather";

export function HomeNavbar() {
    return(
        <View className="justify-end h-20 pl-2.5">
            <View className="flex-row">
                <Text className="text-white text-3xl">
                    Hello User
                </Text>
                <View className="flex-1 flex-row justify-end space-x-3 mr-2">
                    <Fontisto name="bell" size={30} color="#fff"/>
                    <Fontisto name="clock" size={30} color="#fff"/>
                    <Feather name="settings" size={30} color="#fff"/>
                </View>
            </View>
        </View>
    );
}