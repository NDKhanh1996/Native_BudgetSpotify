import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home} from "../screens/bottomTabNavigator/Home";
import {Search} from "../screens/bottomTabNavigator/Search";
import {Library} from "../screens/bottomTabNavigator/Library";
import {Premium} from "../screens/bottomTabNavigator/Premium";
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
                tabBarActiveTintColor: 'white',
                tabBarInactiveTintColor: 'grey',
            }}
        >
            <Tab.Screen name="Home" component={Home} options={{tabBarIcon: ({ color })=>(<FontAwesome name="home" size={30} color={color}/>)}}/>
            <Tab.Screen name="Search" component={Search} options={{tabBarIcon: ({color})=>(<FontAwesome name="search" size={30} color={color}/>)}}/>
            <Tab.Screen name="Library" component={Library} options={{tabBarIcon: ({color})=>(<Ionicons name="library-sharp" size={30} color={color}/>)}}/>
            <Tab.Screen name="Premium" component={Premium} options={{tabBarIcon: ({color})=>(<FontAwesome name="dollar" size={30} color={color}/>)}}/>
        </Tab.Navigator>
    );
}