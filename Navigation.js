import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Screens/Home'
import NewPostScreen from "./Screens/NewPostScreen"
import Login from './Screens/Login';
import Signup from './Screens/Signup';
import { StatusBar } from 'react-native'

const Stack = createNativeStackNavigator();


export const SignInStack = () =>{
   return (
     <>
       <StatusBar animated={true} backgroundColor="black"  barStyle="light-content" />
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" >
        <Stack.Screen name="Home" component={Home}  options={{headerShown: false}}/>
        <Stack.Screen name="NewPost" component={NewPostScreen} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
    </>

  )};
  export const SignOutStack = () =>{
    return (
      <>
        <StatusBar animated={true} backgroundColor="black"  barStyle="light-content" />
     <NavigationContainer>
       <Stack.Navigator initialRouteName="Login" >
         <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
         <Stack.Screen name="Signup" component={Signup} options={{headerShown: false}} />
       </Stack.Navigator>
     </NavigationContainer>
     </>
 
   )};


