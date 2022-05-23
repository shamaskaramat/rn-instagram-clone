import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React, { useState } from 'react'
export const Bottomicons = [
    {
        name: "Home",
        active: "https://img.icons8.com/ios-filled/344/ffffff/home.png",
        inactive: "https://img.icons8.com/ios/344/ffffff/home--v1.png"
    },
    {
        name: "Search",
        active: "https://img.icons8.com/ios-filled/344/ffffff/search.png",
        inactive: "https://img.icons8.com/ios/344/ffffff/search--v1.png"
    },
    {
        name: "Reels",
        active: "https://img.icons8.com/ios-filled/344/ffffff/instagram-reel.png",
        inactive: "https://img.icons8.com/ios/344/ffffff/instagram-reel.png"
    },
    {
        name: "Shop",
        active: "https://img.icons8.com/ios-filled/344/ffffff/shopping-bag.png",
        inactive: "https://img.icons8.com/ios/344/ffffff/shopping-mall.png"
    },
    {
        name: "Profile",
        active: "https://scontent.flhe2-4.fna.fbcdn.net/v/t1.6435-9/129610036_892623254899223_4470448865637044113_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeGDIBM_DJ0IFh0H3MI1oAQYYlFSbz4hgdFiUVJvPiGB0aAgiHumlyELd9j37FUBgvhptCbRPh3T2K3Wl2WO6nH3&_nc_ohc=PliiNbOYlwIAX-8j0Gm&_nc_ht=scontent.flhe2-4.fna&oh=00_AT9T-UvtPf3_gX1ett5w5-ZjgpJ3jtsUfvmvKjAAqSc9Zw&oe=6266AB70",
        inactive: "https://scontent.flhe2-4.fna.fbcdn.net/v/t1.6435-9/129610036_892623254899223_4470448865637044113_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeGDIBM_DJ0IFh0H3MI1oAQYYlFSbz4hgdFiUVJvPiGB0aAgiHumlyELd9j37FUBgvhptCbRPh3T2K3Wl2WO6nH3&_nc_ohc=PliiNbOYlwIAX-8j0Gm&_nc_ht=scontent.flhe2-4.fna&oh=00_AT9T-UvtPf3_gX1ett5w5-ZjgpJ3jtsUfvmvKjAAqSc9Zw&oe=6266AB70"
    },
]

const BottomTab = ({ icons }) => {
    const [activeTab, setActiveTabs] = useState('Home')
    const Icon = ({ icon }) => (
        <TouchableOpacity onPress={() => setActiveTabs(icon.name)}>
            <Image source={{ uri: icon.active }} style={styles.icon} />
        </TouchableOpacity>
    )
    return (
        <View style={styles.container}>
            {icons.map((icon, index) => (
                <Icon key={index} icon={icon} />
            ))}
        </View>
    )
}

export default BottomTab

const styles = StyleSheet.create({
    icon: {
        height: 30,
        width: 30,

    },
    container: {
        flexDirection: "row",
        justifyContent:"space-around",
        height: 50,
        paddingTop:10,
    }
})