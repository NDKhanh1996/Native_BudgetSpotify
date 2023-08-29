import {HomeNavbar} from "../components/homePage/HomeNavbar";
import {CategoriesButton} from "../components/homePage/CategoriesButton";
import {Dimensions, View} from "react-native";
import {RecommendPlaylistButton} from "../components/homePage/RecommendPlaylistButton";

const {width} = Dimensions.get("window");

export function Home() {
    return (
        <View className="flex-1">
            <HomeNavbar/>
            <View className="flex-row space-x-3 ml-3">
                <View>
                    <CategoriesButton title="Songs"/>
                </View>
                <View>
                    <CategoriesButton title="Playlists"/>
                </View>
            </View>
            <View className="flex-row space-x-5 ml-3 mt-3">
                <RecommendPlaylistButton title="Liked songs"/>
                <View className="hidden sm:flex">
                    <RecommendPlaylistButton title="Your newest playlist"/>
                </View>
                <RecommendPlaylistButton title="Best playlist"/>
            </View>
        </View>
    );
}