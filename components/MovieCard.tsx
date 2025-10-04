import { View, Text, Image, TouchableOpacity } from "react-native"
import { Tables } from "@/database.types"
import { Ionicons } from "@expo/vector-icons"

const MovieCard = ({
  title,
  poster_path,
  release_date,
  vote_average,
  genres,
  runtime,
  overview,
  adult,
  popularity
}: Tables<"movies">) => {
  // Format release year
  const releaseYear = release_date ? new Date(release_date).getFullYear() : null
  
  // Format genres (stored as string, assuming comma-separated)
  const genreList = genres ? genres.split(',').slice(0, 2) : []
  
  // Format runtime
  const formatRuntime = (minutes: number | null) => {
    if (!minutes) return null
    const hours = Math.floor(minutes / 60)
    const mins = minutes % 60
    return `${hours}h ${mins}m`
  }

  return (
    <TouchableOpacity className="w-40 mx-2 mb-4">
      {/* Poster with overlay badges */}
      <View className="relative">
        <Image
          source={{ uri: `https://image.tmdb.org/t/p/w500${poster_path}` }}
          className="w-full h-60 rounded-lg"
          resizeMode="cover"
        />
        
        {/* Prime badge */}
        <View className="absolute top-2 left-2 bg-blue-600 px-2 py-1 rounded">
          <Text className="text-white text-xs font-bold">PRIME</Text>
        </View>
        
        {/* HD badge */}
        <View className="absolute top-2 right-2 bg-gray-800 bg-opacity-80 px-1 py-1 rounded">
          <Text className="text-white text-xs font-bold">HD</Text>
        </View>
        
        {/* Rating overlay */}
        <View className="absolute bottom-2 left-2 bg-black bg-opacity-70 px-2 py-1 rounded flex-row items-center">
          <Ionicons name="star" size={12} color="#FFD700" />
          <Text className="text-white text-xs ml-1 font-semibold">
            {vote_average ? vote_average.toFixed(1) : 'N/A'}
          </Text>
        </View>
        
        {/* Adult content indicator */}
        {adult && (
          <View className="absolute bottom-2 right-2 bg-red-600 px-2 py-1 rounded">
            <Text className="text-white text-xs font-bold">18+</Text>
          </View>
        )}
      </View>

      {/* Movie info */}
      <View className="mt-2 px-1">
        {/* Title */}
        <Text className="text-white font-semibold text-sm mb-1" numberOfLines={2}>
          {title}
        </Text>
        
        {/* Meta information */}
        <View className="flex-row flex-wrap items-center">
          {releaseYear && (
            <Text className="text-gray-400 text-xs mr-2">{releaseYear}</Text>
          )}
          
          {/* Genre tags */}
          {genreList.map((genre, index) => (
            <View key={index} className="flex-row items-center">
              <Text className="text-gray-400 text-xs">{genre.trim()}</Text>
              {index < genreList.length - 1 && (
                <Text className="text-gray-400 text-xs mx-1">•</Text>
              )}
            </View>
          ))}
          
          {/* Runtime */}
          {runtime && (
            <>
              <Text className="text-gray-400 text-xs mx-1">•</Text>
              <Text className="text-gray-400 text-xs">
                {formatRuntime(runtime)}
              </Text>
            </>
          )}
        </View>
        
        {/* Popularity indicator */}
        {popularity && popularity > 80 && (
          <View className="flex-row items-center mt-1">
            <Ionicons name="trending-up" size={12} color="#00FF88" />
            <Text className="text-green-400 text-xs ml-1">Trending</Text>
          </View>
        )}
        
        {/* Inclusions badge (simulating Prime benefits) */}
        <View className="flex-row items-center mt-1">
          <Ionicons name="checkmark-circle" size={12} color="#00A8E1" />
          <Text className="text-blue-400 text-xs ml-1">Included with Prime</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default MovieCard
