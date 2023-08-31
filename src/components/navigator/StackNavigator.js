import {MainAuth} from "../../screens/auth/MainAuth";
import {Home} from "../../screens/Home";
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export function StackNavigator() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
            contentStyle: {
                backgroundColor: "#121212"
            }
        }}>
            <Stack.Screen name="Auth" component={MainAuth}/>
            <Stack.Screen name="Home" component={Home}/>
        </Stack.Navigator>
    );
}