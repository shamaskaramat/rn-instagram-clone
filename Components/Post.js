import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { FooterIcons } from '../Data/Icons'

const Post = ({ post }) => {
  return (
    <View style={{ marginBottom: 30, }}>
      {/* <Divider width={1} orientation='vertical'/> */}
      <PostHeader post={post} />
      <PostImage post={post} />
      <PostFooter post={post} />
      <Comments post={post}/>
    </View>
  )
}
const PostHeader = ({ post }) => (
  <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", margin: 5, padding: 7 }} >
    <View style={{ flexDirection: "row", alignItems: "center", marginTop: 5 }}>
      <Image source={{ uri: post.imageurl }}
        style={styles.profileimg}
      />
      <Text style={{ color: "white", marginLeft: 5 }}>{post.user}</Text>
    </View>
    <Text style={{ fontWeight: "bold", color: "white" }}>...</Text>
  </View>
)
const PostImage = ({ post }) => (
  <View>
    <Image source={{ uri: post.imageurl }}
      style={styles.posthero}
    />
  </View>
)
const PostFooter = ({post}) => (
  <View>
  <FooterIcon />
  <Footerinfo post={post}/>
  <CommentSection post={post}/>
  </View>

)
const FooterIcon = () => {
  return (
    <View>
      <View style={{ flexDirection: "row", marginTop: 10}}>
        {FooterIcons.map((icon, index) => (
          <Image source={{ uri: icon.imageurl }} style={styles.footericons} key={index} />
        ))}
        <View style={{position:"absolute", right:1, paddingRight:5}}>
          <Image source={{ uri: "https://img.icons8.com/ios/344/ffffff/info--v1.png" }} style={styles.footericons} />
        </View>
      </View>
    </View>
  )
}
const Footerinfo =({post})=>{
  return(
    <View>
        <Text style={{color:"white" , marginHorizontal:10 , marginTop:5}}>{post.likes}</Text>
        <Text style={{color:"white",marginHorizontal:10 , marginTop:5}}>{post.caption}</Text>
    </View>
  )
}
const CommentSection =({post})=>{
  return(
    <View >
    {post.comments.length > 0 &&(
    <Text style={{color:"gray",marginHorizontal:10 , marginTop:5}}> View {post.comments.length > 1 ? 'all':" "} {post.comments.length} {post.comments.length > 1 ? "Comments" : "Comment"} </Text>
    )}
    </View>
  )
}
const Comments = ({post})=>{
  return(
  <View>
    {post.comments.map((comment, index)=>(
      <View key={index}>
      <Text style={{color:"white",fontWeight:"400",marginHorizontal:10 , marginTop:5}}>
        <Text style={{fontWeight:"bold",marginHorizontal:8 , marginTop:5}} >{comment.user} </Text>
        {comment.comment}
        </Text>
      </View>
    ))}
  </View>
)}
const styles = StyleSheet.create({
  profileimg: {
    height: 30,
    width: 30,
    borderRadius: 50
  },
  posthero: {
    height: 450,
    width: "100%"
  },
  footericons: {
    height: 30,
    width: 30,
    marginLeft:10
  }
})
export default Post

