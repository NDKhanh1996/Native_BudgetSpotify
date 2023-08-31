import {HomeNavbar} from "../components/homeScreen/HomeNavbar";
import {CategoriesButton} from "../components/homeScreen/CategoriesButton";
import {View, Text} from "react-native";
import {RecommendPlaylistButton} from "../components/homeScreen/RecommendPlaylistButton";

export function Home() {
    return (
        <View className="flex-1">
            <HomeNavbar/>
            <View className="flex-row space-x-3 ml-3 mt-7">
                <View>
                    <CategoriesButton title="Songs"/>
                </View>
                <View>
                    <CategoriesButton title="Playlists"/>
                </View>
            </View>
            <View className="flex-row space-x-5 ml-3 mt-7">
                <View>
                    <RecommendPlaylistButton title="Liked songs"/>
                </View>
                <View className="hidden sm:flex">
                    <RecommendPlaylistButton title="Your newest playlist"/>
                </View>
                <View>
                    <RecommendPlaylistButton title="Best playlist"/>
                </View>
            </View>
            <Text className="text-white text-3xl ml-2.5 mt-7">
                Your Playlist
            </Text>

            <Text className="text-white text-3xl ml-2.5 mt-7">
                Most Liked
            </Text>
        </View>
    );
}