import {HomeNavbar} from "../../components/tabNavigatorScreens/homeScreen/HomeNavbar";
import {CategoriesButton} from "../../components/tabNavigatorScreens/homeScreen/CategoriesButton";
import {SafeAreaView, ScrollView, Text, View} from "react-native";
import {RecommendPlaylistButton} from "../../components/tabNavigatorScreens/homeScreen/RecommendPlaylistButton";
import {useEffect, useState} from "react";
import UserService from "../../services/user.service";
import SongService from "../../services/song.service";
import {PlaylistCard} from "../../components/tabNavigatorScreens/homeScreen/PlaylistCard";

export function Home() {
    const [yourPlaylist, setYourPlaylist] = useState([]);
    const [allPublicPlaylist, setAllPublicPlaylist] = useState([]);
    const [bestPlaylist, setBestPlaylist] = useState(null);
    const [sortLikeDescendPlaylistArr, setSortLikeDescendPlaylistArr] = useState([])

    const getAllPublicPlaylist = async () => {
        const responseAllPlaylistPublic = await SongService.getAllPlaylistPublic();
        const allPlaylistPublicData = responseAllPlaylistPublic.data["allPlaylistPublic"];
        if (allPlaylistPublicData) {
            setAllPublicPlaylist(allPlaylistPublicData);
        }
        return allPlaylistPublicData;
    }

    const getBestPlaylist = (allPlaylistPublicData) => {
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
    }
    
    const sortLikeDescendPlaylist = (allPlaylistPublicData) => {
        return allPlaylistPublicData.sort((a, b) => {
            return b["playlistLikeCounts"].length - a["playlistLikeCounts"].length;
        });
    }

    useEffect(() => {
        (async () => {
            try {
                const responsePlaylist = await UserService.getPlaylist();
                setYourPlaylist(responsePlaylist.data.data);

                const allPlaylistPublicData = await getAllPublicPlaylist();

                getBestPlaylist(allPlaylistPublicData);

                const sortedPlaylist = sortLikeDescendPlaylist(allPlaylistPublicData);
                setSortLikeDescendPlaylistArr(sortedPlaylist);
            } catch (e) {
                console.log(e.message);
            }
        })();
    }, []);
    console.log(sortLikeDescendPlaylistArr)

    return (
        <View className="flex-1 pl-3">
            <HomeNavbar/>
            <View className="flex-row space-x-3 mt-7">
                <View>
                    <CategoriesButton title="Songs"/>
                </View>
                <View>
                    <CategoriesButton title="Podcast"/>
                </View>
            </View>
            <View className="flex-row space-x-5 mt-7">
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
            <View className="flex space-y-8 mt-8">
                <Text className="text-white text-3xl">
                    Your Playlist
                </Text>
                <SafeAreaView>
                    <ScrollView horizontal={true} className="pl-0">
                        {allPublicPlaylist.map(publicPlaylist => (
                            <PlaylistCard
                                avatar={{uri: publicPlaylist["avatar"]}}
                                name={publicPlaylist["playlistName"]}
                                key={publicPlaylist["_id"]}
                            />
                        ))}
                    </ScrollView>
                </SafeAreaView>
                <Text className="text-white text-3xl">
                    Most Liked
                </Text>
                <SafeAreaView>
                    <ScrollView horizontal={true} className="pl-0">
                        {sortLikeDescendPlaylistArr.map(publicPlaylist => (
                            <PlaylistCard
                                avatar={{uri: publicPlaylist["avatar"]}}
                                name={publicPlaylist["playlistName"]}
                                key={publicPlaylist["_id"]}
                            />
                        ))}
                    </ScrollView>
                </SafeAreaView>
            </View>
        </View>
    );
}