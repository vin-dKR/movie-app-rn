import { icons } from "@/constants/icons"
import { images } from "@/constants/images"
import { Tabs } from "expo-router"
import { Image, ImageBackground, Text, View } from "react-native"

interface TabIconProps {
    textTitle: string
    icon: string
    highlightImage: string
}

const TabIcon = ({ focused, textTitle, icon, highlightImage }: any) => {
    if (focused) return (
        <ImageBackground
            source={highlightImage}
            className="flex flex-row w-full flex-1 min-w-[112px] min-h-14 mt-4 justify-center items-center rounded-full overflow-hidden"
        >
            <Image
                source={icon}
                tintColor="#151312"
                className="size-5"
            />
            <Text className="text-secondary text-base font-semibold ml-2">{textTitle}</Text>
        </ImageBackground>
    )

    return (
        <View className="size-full justify-center items-center mt-4 rounded-full">
            <Image className="size-5" tintColor="#A8B5DB" source={icon} />
        </View>
    )
}

const Layout = () => {
    return (
        <Tabs
            screenOptions={{
                tabBarShowLabel: false,
                tabBarItemStyle: {
                    width: "100%",
                    height: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                },
                tabBarStyle: {
                    backgroundColor: "#0F0D23",
                    borderRadius: 50,
                    marginHorizontal: 20,
                    marginBottom: 36,
                    height: 52,
                    position: "absolute",
                    overflow: "hidden",
                    borderWidth: 1,
                    borderColor: "#0F0D23",
                },
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <>
                            <TabIcon
                                focused={focused}
                                textTitle="Home"
                                icons={icons.home}
                                highlightImage={images.highlight}
                            />
                        </>
                    )
                }}
            />
            <Tabs.Screen
                name="search"
                options={{
                    title: "Search",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <>
                            <TabIcon
                                focused={focused}
                                textTitle="Search"
                                icon={icons.search}
                                highlightImage={images.highlight}
                            />
                        </>
                    )
                }}
            />
            <Tabs.Screen
                name="saved"
                options={{
                    title: "Saved",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <>
                            <TabIcon
                                focused={focused}
                                textTitle="Saved"
                                icon={icons.save}
                                highlightImage={images.highlight}
                            />
                        </>
                    )
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: "Profile",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <>
                            <TabIcon
                                focused={focused}
                                textTitle="Profile"
                                icon={icons.person}
                                highlightImage={images.highlight}
                            />
                        </>
                    )
                }}
            />
        </Tabs>
    )
}

export default Layout
