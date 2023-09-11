import {HomeNavbar} from "../../components/tabNavigatorScreens/homeScreen/HomeNavbar";
import {CategoriesButton} from "../../components/tabNavigatorScreens/homeScreen/CategoriesButton";
import {ScrollView, Text, View} from "react-native";
import {RecommendPlaylistButton} from "../../components/tabNavigatorScreens/homeScreen/RecommendPlaylistButton";
import {useEffect, useState} from "react";
import UserService from "../../services/user.service";
import SongService from "../../services/song.service";
import {PlaylistCard} from "../../components/tabNavigatorScreens/homeScreen/PlaylistCard";
import {PlaylistScreen} from "../../components/songListScreen/PlaylistScreen";

export function Home({navigation}) {
    const [yourPlaylist, setYourPlaylist] = useState([]);
    const [sortLikeDescendPlaylistArr, setSortLikeDescendPlaylistArr] = useState([]);
    const [allPublicPlaylist, setAllPublicPlaylist] = useState([]);

    const navigateToPlaylistScreen = (data) => {
        navigation.navigate("PlaylistScreen", {data: data});
    }

    const getAllPublicPlaylist = async () => {
        const responseAllPlaylistPublic = await SongService.getAllPlaylistPublic();
        const allPlaylistPublicData = responseAllPlaylistPublic.data["allPlaylistPublic"];

        if (allPlaylistPublicData) {
            setAllPublicPlaylist(allPlaylistPublicData);
        }

        return allPlaylistPublicData;
    }

    const sortLikeDescendPlaylist = (allPlaylistPublicData) => {
        const copyOfPlaylistData = [...allPlaylistPublicData];

        return copyOfPlaylistData.sort((a, b) => {
            return b["playlistLikeCounts"].length - a["playlistLikeCounts"].length;
        });
    }

    useEffect(() => {
        (async () => {
            try {
                const responsePlaylist = await UserService.getPlaylist();
                setYourPlaylist(responsePlaylist.data.data);

                const allPlaylistPublicData = await getAllPublicPlaylist();

                const sortedPlaylist = sortLikeDescendPlaylist(allPlaylistPublicData);
                setSortLikeDescendPlaylistArr(sortedPlaylist);
            } catch (e) {
                console.log(e.message);
            }
        })();
    }, []);

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
                {sortLikeDescendPlaylistArr.length > 0 && (
                    <View>
                        <RecommendPlaylistButton
                            title="Best playlist"
                            img={{uri: sortLikeDescendPlaylistArr[0]["avatar"]}}
                        />
                    </View>
                )}
            </View>
            <ScrollView className="flex space-y-8 mt-8">
                <Text className="text-white text-3xl">
                    Your Playlist
                </Text>
                <ScrollView horizontal={true} className="pl-0">
                    {yourPlaylist.map(publicPlaylist => (
                        <PlaylistCard
                            avatar={{uri: publicPlaylist["avatar"]}}
                            name={publicPlaylist["playlistName"]}
                            key={publicPlaylist["_id"]}
                            onPress={()=>(navigateToPlaylistScreen(publicPlaylist["_id"]))}
                        />
                    ))}
                </ScrollView>
                <Text className="text-white text-3xl">
                    Most Liked
                </Text>
                <ScrollView horizontal={true} className="pl-0">
                    {sortLikeDescendPlaylistArr.map(publicPlaylist => (
                        <PlaylistCard
                            avatar={{uri: publicPlaylist["avatar"]}}
                            name={publicPlaylist["playlistName"]}
                            key={publicPlaylist["_id"]}
                            onPress={()=>(navigateToPlaylistScreen(publicPlaylist["_id"]))}
                        />
                    ))}
                </ScrollView>
                <Text className="text-white text-3xl">
                    All Playlist
                </Text>
                <ScrollView horizontal={true} className="pl-0 mb-16">
                    {allPublicPlaylist.map(publicPlaylist => (
                        <PlaylistCard
                            avatar={{uri: publicPlaylist["avatar"]}}
                            name={publicPlaylist["playlistName"]}
                            key={publicPlaylist["_id"]}
                            onPress={()=>(navigateToPlaylistScreen(publicPlaylist["_id"]))}
                        />
                    ))}
                </ScrollView>
            </ScrollView>
        </View>
    );
}