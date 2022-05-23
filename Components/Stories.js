import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import { USER } from '../Data/User'

const Stories = () => {
    return (
        <View style={{ flexDirection: "row" }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {USER.map((story, index) => (
                    <View key={index} style={{alignItems:"center"}}>
                    <Image source={{ uri: story.img }} style={styles.storiesimg} />
                    <Text style={{color:"white"}}>{story.user.length>10 ? story.user.slice(0,8).toLowerCase() + '...' : story.user.toLowerCase()}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

export default Stories

const styles = StyleSheet.create({
    storiesimg: {
        height: 70,
        width: 70,
        borderRadius: 50,
        borderColor: "#ff8501",
        borderWidth: 3,
        marginLeft: 6
    }
})