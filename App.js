import {StatusBar} from 'expo-status-bar';
import {View} from 'react-native';
import {Home} from "./src/pages/Home";
import {Auth} from "./src/pages/Auth";

export default function App() {
    return (
        <View className="flex-1" style={{backgroundColor: "#121212"}}>
            <StatusBar style="inverted"/>
            <Auth/>
            {/*<Home/>*/}
        </View>
    );
}