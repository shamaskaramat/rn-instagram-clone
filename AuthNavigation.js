import React, { useEffect, useState } from 'react'
import { SignInStack, SignOutStack } from './Navigation'
import {firebase} from './Firebase'
const AuthNavigation = () => {
    const [currentUser, setCurrentUser] = useState(null)
    const userHandler =  user => user ? setCurrentUser(user) : setCurrentUser(null)
    useEffect(()=>firebase.auth().onAuthStateChanged(user=> userHandler(user)))
   return <>{currentUser ? <SignInStack/> : <SignOutStack/>}</>  
}

export default AuthNavigation