import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../Components/Header'
import Stories from '../Components/Stories'
import Post from '../Components/Post'
import { POSTS } from '../Data/Posts';
import BottomTab, { Bottomicons } from '../Components/BottomTab'
const Home = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} />
      <Stories />
      <ScrollView>
        {POSTS.map((post, index) => (
          <Post post={post} key={index} />
        ))}
      </ScrollView>
      
   <BottomTab icons={Bottomicons}/>
     
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    height: "100%",
    width: "100%"
  }
})