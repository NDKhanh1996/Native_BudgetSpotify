import {NavigationContainer} from "@react-navigation/native";
import {StackNavigator} from "./src/navigator/StackNavigator";
import {StatusBar} from 'react-native';

export default function App() {
    return (
        <NavigationContainer>
            <StatusBar/>
            <StackNavigator/>
        </NavigationContainer>
    );
}