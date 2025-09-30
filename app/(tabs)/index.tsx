import SearchBar from "@/components/SearchBar"
import { icons } from "@/constants/icons"
import { images } from "@/constants/images"
import { View, Image, ScrollView } from "react-native"

const Index = () => {
    return (
        <View className="flex-1 bg-primary">
            <Image source={images.bg} className="absolute w-full z-0" />

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    minHeight: "100%",
                    paddingBottom: 10
                }}
                className="flex-1 px-5"
            >
                <Image source={icons.logo} className="w-12 h-10 mt-20 mb-5 mx-auto" />
                <SearchBar />
            </ScrollView>
        </View>
    )
}

export default Index
