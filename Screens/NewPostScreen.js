import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AddNewPost from '../Components/NewPost/AddNewPost'

const NewPostScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <AddNewPost navigation={navigation}/>
    </View>
  )
}

export default NewPostScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: "black",
        marginTop: 30,
        height: "100%",
        width: "100%",

      }
})