import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home} from "../screens/Home";
import {Search} from "../screens/Search";
import {Library} from "../screens/auth/Library";
import {Premium} from "../screens/auth/Premium";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

export function TabNavigator() {
    return (
        <Tab.Navigator
            sceneContainerStyle={{
                backgroundColor: "#121212",
            }}
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: 'rgba(18, 18, 18, 0.5)',
                    position: "absolute",
                },
            }}
        >
            <Tab.Screen name="Home" component={Home} options={{tabBarIcon: ()=>(<FontAwesome name="home" size={30} color="#fff"/>)}}/>
            <Tab.Screen name="Search" component={Search} options={{tabBarIcon: ()=>(<FontAwesome name="search" size={30} color="#fff"/>)}}/>
            <Tab.Screen name="Library" component={Library} options={{tabBarIcon: ()=>(<Ionicons name="library-sharp" size={30} color="#fff"/>)}}/>
            <Tab.Screen name="Premium" component={Premium} options={{tabBarIcon: ()=>(<FontAwesome name="dollar" size={30} color="#fff"/>)}}/>
        </Tab.Navigator>
    );
}