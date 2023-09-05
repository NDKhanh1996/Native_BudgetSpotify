import {AuthMain} from "../screens/auth/AuthMain";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Signup} from "../screens/auth/Signup";
import {Login} from "../screens/auth/Login";
import {TabNavigator} from "./TabNavigator";

const Stack = createNativeStackNavigator();

export function StackNavigator() {
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
            <Stack.Screen name="AuthMain" component={AuthMain} options={{headerShown: false}}/>
            <Stack.Screen name="Signup" component={Signup}/>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="TabNavigator" component={TabNavigator} options={{headerShown: false}}/>
        </Stack.Navigator>
    );
}