import {Text, TouchableOpacity, View} from "react-native";
import Fontisto from "react-native-vector-icons/Fontisto";
import Feather from "react-native-vector-icons/Feather";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useEffect, useState} from "react";

export function HomeNavbar() {
    const [userInfo, setUserInfo] = useState({});

    useEffect(() => {
        (async () => {
            setUserInfo(JSON.parse(await AsyncStorage.getItem("userLogin")));
        })();
    }, []);

    return (
        <View className="justify-end h-16 pl-2.5">
            <View className="flex-row">
                <Text className="text-white text-2xl md:text-3xl">
                    Hello {userInfo["firstName"]}
                </Text>
                <View className="flex-1 flex-row justify-end space-x-3 mr-2">
                    <TouchableOpacity>
                        <Fontisto name="bell" size={30} color="#fff"/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Fontisto name="clock" size={30} color="#fff"/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Feather name="settings" size={30} color="#fff"/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}