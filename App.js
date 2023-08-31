import {StatusBar} from 'expo-status-bar';
import {NavigationContainer} from "@react-navigation/native";
import {StackNavigator} from "./src/components/navigator/StackNavigator";

export default function App() {
    return (
        <NavigationContainer>
            <StatusBar style="inverted"/>
            <StackNavigator/>
        </NavigationContainer>
    );
}