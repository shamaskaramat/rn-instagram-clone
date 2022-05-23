import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import FormikPostUploader from './FormikPostUploader'


const AddNewPost = ({navigation}) => {
    return (
        <View>
            <Header navigation={navigation}/>
            <FormikPostUploader navigation={navigation}/>
        </View>
    )
}
const Header = ({navigation}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
                <Image source={{ uri: "https://img.icons8.com/ios-filled/344/ffffff/chevron-left.png" }} style={{ height: 30, width: 30 }} />
            </TouchableOpacity>
            <Text style={{ color: "white", fontSize:20, fontWeight:"700" }}> NEW POST</Text>
            <Text></Text>
        </View>
    )
}

export default AddNewPost

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 5
    }
})    