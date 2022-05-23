import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Signupform from '../Components/Signup/Signupform'
const Insta_logo = "https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-512.png"
const Signup = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.logocontainer}>
                <Image source={{ uri: Insta_logo }} style={styles.instalogo} />
            </View>
            <Signupform navigation={navigation}/>
        </View>
    )
}

export default Signup

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white",
        paddingTop:50,
        paddingHorizontal:12
    },
    logocontainer:{
       alignItems:"center",
       marginTop:60
    },
    instalogo: {
        height: 100,
        width: 100
    }
})