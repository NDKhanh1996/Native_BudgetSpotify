import {Main} from "../screens/auth/Main";
import {Home} from "../screens/Home";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Signup} from "../screens/auth/Signup";

const Stack = createNativeStackNavigator();

export function StackNavigator() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
            contentStyle: {
                backgroundColor: "#121212"
            }
        }}>
            <Stack.Screen name="Auth" component={Main}/>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Signup" component={Signup}/>
        </Stack.Navigator>
    );
}