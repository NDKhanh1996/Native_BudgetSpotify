import {TouchableOpacity, View, Text} from 'react-native';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import {Home} from "../screens/bottomTabNavigator/Home";
import {Search} from "../screens/bottomTabNavigator/Search";
import {Library} from "../screens/bottomTabNavigator/Library";
import Ionicons from "react-native-vector-icons/Ionicons";
import {Premium} from "../screens/bottomTabNavigator/Premium";
import {PlayBar} from "../components/playBar/PlayBar";

const Tab = createBottomTabNavigator();

export function TabNavigator() {
    return (
        <Tab.Navigator
            tabBar={(props) => <MyTabBar {...props} />}
            sceneContainerStyle={{
                backgroundColor: "#121212",
            }}
            screenOptions={{
                headerShown: false,
            }}
        >
            <Tab.Screen name="Home" component={Home}
                        options={{tabBarIcon: ({color}) => (<FontAwesome name="home" size={30} color={color}/>)}}/>
            <Tab.Screen name="Search" component={Search}
                        options={{tabBarIcon: ({color}) => (<FontAwesome name="search" size={30} color={color}/>)}}/>
            <Tab.Screen name="Library" component={Library} options={{
                tabBarIcon: ({color}) => (<Ionicons name="library-sharp" size={30} color={color}/>)
            }}/>
            <Tab.Screen name="Premium" component={Premium}
                        options={{tabBarIcon: ({color}) => (<FontAwesome name="dollar" size={30} color={color}/>)}}/>
        </Tab.Navigator>
    );
}

function MyTabBar({ state, descriptors, navigation }) {
    return (
        <View className="absolute bottom-0">
            <PlayBar className="relative"/>
            <View className="relative flex-row bg-gray-900, w-screen">
                {state.routes.map((route, index) => {
                    const { options } = descriptors[route.key];
                    const label =
                        options.tabBarLabel !== undefined
                            ? options.tabBarLabel
                            : options.title !== undefined
                                ? options.title
                                : route.name;

                    const isFocused = state.index === index;

                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate(route.name);
                        }
                    };

                    const onLongPress = () => {
                        navigation.emit({
                            type: 'tabLongPress',
                            target: route.key,
                        });
                    };

                    return (
                        <TouchableOpacity
                            accessibilityRole="button"
                            accessibilityState={isFocused ? { selected: true } : {}}
                            accessibilityLabel={options.tabBarAccessibilityLabel}
                            testID={options.tabBarTestID}
                            onPress={onPress}
                            onLongPress={onLongPress}
                            className="flex-1 justify-center, items-center"
                        >
                            <Text style={{ color: isFocused ? 'white' : 'grey' }}>
                                {label}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
            </View>
        </View>
    );
}