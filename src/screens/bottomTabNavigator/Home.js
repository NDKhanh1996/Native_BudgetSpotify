import {HomeNavbar} from "../../components/tabNavigatorScreens/homeScreen/HomeNavbar";
import {CategoriesButton} from "../../components/tabNavigatorScreens/homeScreen/CategoriesButton";
import {View, Text} from "react-native";
import {RecommendPlaylistButton} from "../../components/tabNavigatorScreens/homeScreen/RecommendPlaylistButton";
import image from '../../../assets/img/likedPlaylistImg.jpg';
import {useEffect, useState} from "react";
import UserService from "../../services/user.service";

export function Home() {
    const [yourPlaylist, setYourPlaylist] = useState({});

    useEffect(() => {
        (async () => {
            try {
                setYourPlaylist(await UserService.getPlaylist());
            } catch (e) {
                console.log(e.message);
            }
        })();
    }, []);

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
                    <RecommendPlaylistButton title="Liked songs" img={image}/>
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