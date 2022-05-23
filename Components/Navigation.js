import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Screens/Home'
import NewPostScreen from "../Screens/NewPostScreen"

const Stack = createNativeStackNavigator();


const SignInStack = () =>{
   return (
    <NavigationContainer>
      <Stack.Navigator  >
        <Stack.Screen name="Home" component={Home}  options={{headerShown: false}}/>
        <Stack.Screen name="NewPost" component={NewPostScreen} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  )};


export default SignInStack ;