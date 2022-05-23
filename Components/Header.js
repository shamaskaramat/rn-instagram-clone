import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import {firebase} from '../Firebase'
const handleSignout = async ()=> {  
     try {
        await firebase.auth().signOut()
    }
    catch (error) {
        console.log(error)
    }
}
const Header = ({navigation}) => {
    return (
        <>
            <View style={styles.container}>
                <TouchableOpacity onPress={handleSignout}>
                    <Image source={require('../assets/ista.png')} style={styles.logo} />
                </TouchableOpacity>
                <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity onPress={()=>navigation.push("NewPost")}>
                        <Image source={{ uri: "https://img.icons8.com/ios/344/ffffff/add--v1.png" }}
                            style={styles.iconimg}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={{ uri: "https://img.icons8.com/ios/344/ffffff/like--v1.png" }}
                            style={styles.iconimg}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <View style={styles.rednoti}><Text style={{color:"white", fontWeight:"bold"}}>9</Text></View>
                        <Image source={{ uri: "https://img.icons8.com/ios/344/ffffff/facebook-messenger--v1.png" }}
                            style={styles.iconimg}
                        />
                    </TouchableOpacity>
                </View>

            </View>
        </>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10,
        paddingHorizontal:10
    },
    logo: {
        height: 50,
        width: 100,
        resizeMode: 'contain',
    },
    iconimg: {
        height: 30,
        width: 30,
        marginLeft: 5
    },
    rednoti:{
        backgroundColor:"red",
        position:"absolute",
        right:-10,
        top:-2,
        zIndex:100,
        borderRadius:25,
        justifyContent:"center",
        alignItems:"center",
        height:20,
        width:20


    }
})