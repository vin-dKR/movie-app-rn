import SearchBar from "@/components/SearchBar"
import { icons } from "@/constants/icons"
import { images } from "@/constants/images"
import { useFetch } from "@/hooks/useFetch"
import { fetchMoviesDefault } from "@/utils/fetchMovies"
import { View, Image, ScrollView, FlatList, ActivityIndicator } from "react-native"
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"
import MovieCard from "@/components/MovieCard"

const Index = () => {
    const { response, loading, reset, fetchData } = useFetch(fetchMoviesDefault, true)
    return (
        <View className="flex-1 bg-primary">
            <Image source={images.bg} className="absolute w-full z-0" />

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    minHeight: "100%",
                    paddingBottom: 10
                }}
                className="flex-1 px-0"
            >
                <Image source={icons.logo} className="w-12 h-10 mt-20 mb-5 mx-auto" />
                <SearchBar />

                <SafeAreaProvider>
                    <SafeAreaView className="flex-1">
                        {loading && (
                            <View className="flex-1 items-center justify-center">
                                <ActivityIndicator />
                            </View>
                        )}

                        {response && (
                            <FlatList
                                data={response?.data}
                                renderItem={
                                    ({ item }) => <View className="mt-4">
                                        <MovieCard {...item} />
                                    </View>}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                contentContainerStyle={{ paddingHorizontal: 4 }}
                                keyExtractor={(item) => item.id.toString()}
                            />
                        )}
                    </SafeAreaView>
                </SafeAreaProvider>
            </ScrollView>
        </View>
    )
}

export default Index
