import {AuthMain} from "../screens/auth/AuthMain";
import {Home} from "../screens/Home";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Signup} from "../screens/auth/Signup";

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
            <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
            <Stack.Screen name="Signup" component={Signup}/>
        </Stack.Navigator>
    );
}