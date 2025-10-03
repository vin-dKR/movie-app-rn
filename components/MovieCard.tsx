import { View, Text, Image } from "react-native"
import { Tables } from "@/database.types"

interface MovieCardProp {
    id: number
}

const MovieCard = ({ id, title, popularity, poster_path }: Tables<"movies">) => {
    return (
        <View className="w-32 h-48 rounded-lg overflow-hidden bg-gray-800">
            {/* Add your poster image here */}
            <Image
                source={{ uri: `https://image.tmdb.org/t/p/w500${poster_path}` }}
                className="w-full h-40"
                resizeMode="cover"
            />
            <Text className="text-white text-xs mt-1 px-2" numberOfLines={2}>
                {title}
            </Text>
        </View>
    )
}

export default MovieCard
