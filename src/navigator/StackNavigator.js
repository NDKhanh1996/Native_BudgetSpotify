import {AuthMain} from "../screens/auth/AuthMain";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Signup} from "../screens/auth/Signup";
import {Login} from "../screens/auth/Login";
import {TabNavigator} from "./TabNavigator";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useEffect} from "react";
import {useNavigation} from "@react-navigation/native";
import {OpenScreen} from "../components/openScreen/OpenScreen";
import {PlaylistScreen} from "../components/songListScreen/PlaylistScreen";

const Stack = createNativeStackNavigator();

export function StackNavigator() {
    const navigation = useNavigation();
    useEffect(() => {
        (async () => {
            try {
                const userInfo = await AsyncStorage.getItem("userLogin");
                navigation.navigate(userInfo ? 'TabNavigator' : 'AuthMain');
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);

    return (
        <Stack.Navigator screenOptions={{
            contentStyle: {
                backgroundColor: "#121212"
            },
            headerStyle: {
                backgroundColor: "#121212"
            },
            headerTintColor: "white",
            headerTitleAlign: "center",
        }}>
            <Stack.Screen name="OpenScreen" component={OpenScreen} options={{headerShown: false}}/>
            <Stack.Screen name="AuthMain" component={AuthMain} options={{headerShown: false}}/>
            <Stack.Screen name="Signup" component={Signup}/>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="TabNavigator" component={TabNavigator} options={{headerShown: false}}/>
            <Stack.Screen name="PlaylistScreen" component={PlaylistScreen}/>
        </Stack.Navigator>
    );
}