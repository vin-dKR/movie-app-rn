import { useRouter } from "expo-router"
import { icons } from "@/constants/icons"
import { View, Image, TextInput } from "react-native"

const SearchBar = () => {
    const router = useRouter()
    return (
        <View className="flex flex-row items-center gap-2 border border-white/20 rounded-xl px-3 py-1">
            <Image source={icons.search} />
            <TextInput
                onPress={() => router.push("/search")}
                placeholder="Search Movies"
                value=""
                className="w-full"
                placeholderTextColor="#a8b5db"
            />
        </View>
    )
}

export default SearchBar
