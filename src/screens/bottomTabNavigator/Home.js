import {HomeNavbar} from "../../components/tabNavigatorScreens/homeScreen/HomeNavbar";
import {CategoriesButton} from "../../components/tabNavigatorScreens/homeScreen/CategoriesButton";
import {View, Text} from "react-native";
import {RecommendPlaylistButton} from "../../components/tabNavigatorScreens/homeScreen/RecommendPlaylistButton";
import {useEffect, useState} from "react";
import UserService from "../../services/user.service";
import SongService from "../../services/song.service";

export function Home() {
    const [yourPlaylist, setYourPlaylist] = useState([]);
    const [allPublicPlaylist, setAllPublicPlaylist] = useState([]);
    const [bestPlaylist, setBestPlaylist] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const responsePlaylist = await UserService.getPlaylist();
                setYourPlaylist(responsePlaylist.data.data);

                const responseAllPlaylistPublic = await SongService.getAllPlaylistPublic();
                const allPlaylistPublicData = responseAllPlaylistPublic.data["allPlaylistPublic"];
                if (allPlaylistPublicData) {
                    setAllPublicPlaylist(allPlaylistPublicData);
                }

                let bestPlaylistVar = null;
                for (let i = 0; i < allPlaylistPublicData.length; i++) {
                    const playlist = allPlaylistPublicData[i];

                    if (!bestPlaylistVar || playlist["playlistLikeCounts"].length > bestPlaylistVar["playlistLikeCounts"].length) {
                        bestPlaylistVar = playlist;
                    }
                }

                if (bestPlaylistVar) {
                    setBestPlaylist(bestPlaylistVar)
                }
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
                    <RecommendPlaylistButton
                        title="Liked songs"
                        img={require('../../../assets/img/likedPlaylistImg.jpg')}
                    />
                </View>
                {yourPlaylist.length > 0 && (
                    <View className="hidden sm:flex">
                        <RecommendPlaylistButton
                            title="Your newest playlist"
                            img={{uri: yourPlaylist[yourPlaylist.length - 1]["avatar"]}}
                        />
                    </View>
                )}
                {bestPlaylist !== null && (
                    <View>
                        <RecommendPlaylistButton
                            title="Best playlist"
                            img={{uri: bestPlaylist["avatar"]}}
                        />
                    </View>
                )}
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