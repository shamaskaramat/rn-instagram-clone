import { StyleSheet, Text, View, TextInput,  TouchableOpacity, Pressable,Alert } from 'react-native'
import React, { useState } from 'react'
import * as Yup from "yup";
import { Formik } from 'formik';
import Validator from 'email-validator';
import {firebase,db} from '../../Firebase';
import "firebase/auth";

const Signupform = ({navigation}) => {
    const SignupFormSchema = Yup.object().shape({
        email: Yup.string().email().required('An email is required'),
        username: Yup.string().required().min(2, 'An email is required'),
        password: Yup.string().required().min(8, 'Your password has to have at least characters ')
    })
    const getRandomProfilePicture = async ()=>{
        const res = await fetch("https://randomuser.me/api")
        const data = await res.json()
        return data.results[0].picture.large
    }
    const onSign = async (email, password, username)=>{
        try {
            authuser=await firebase.auth().createUserWithEmailAndPassword(email, username, password)
            console.log("firebase Sign Up successful 🔥", email ,username, password)
            db.collection('user').add({
                owner_uid : authuser.user.uid,  
                username:username,
                email: authuser.user.email,
                profile_picture: await getRandomProfilePicture()
            })
        } catch (error) {
            Alert.alert("🔥" , error.message )
        }
    }

    return (
        <View style={styles.wrapper}>
            <Formik 
            initialValues={{email:'' , username:"", password:'' }}
            onSubmit={values=>{onSign(values.email, values.password , values.username)}}
            validationSchema={SignupFormSchema}
            validateOnMount={true}
            >
             {({ handleBlur, handleChange, handleSubmit, values, errors, isValid }) => (
                 <>
                <View style={[styles.inputField,{
                    borderColor:values.email.length<1 || Validator.validate(values.email) ? "#ccc" : "red"
                }]}>
                    <TextInput
                        placeholderTextColor='#444'
                        placeholder='Email'
                        autoCapitalize='none'
                        keyboardType='email-address'
                        textContentType='emailAddress'
                        autoFocus={true}
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        value={values.email}
                    />
                </View>
                <View style={[styles.inputField,{
                borderColor:1 > values.password.length || values.password.length > 6 ? "#ccc" : "red"
 
                }
                ]}>
                    <TextInput
                        placeholderTextColor='#444'
                        placeholder='Username'
                        autoCapitalize='none'
                        autoCorrect={false}
                        textContentType='username'
                        onChangeText={handleChange('username')}
                        onBlur={handleBlur('username')}
                        value={values.username}
                    />
                </View>
                <View style={[styles.inputField,{
                borderColor:1 > values.password.length || values.password.length > 6 ? "#ccc" : "red"
 
                }
                ]}>
                    <TextInput
                        placeholderTextColor='#444'
                        placeholder='Password'
                        autoCapitalize='none'
                        autoCorrect={false}
                        secureTextEntry={true}
                        textContentType='password'
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        value={values.password}
                    />
                </View>
                <Pressable style={styles.button(isValid)} onPress={handleSubmit}><Text style={styles.textlogin}>Sign Up</Text></Pressable>
                <View style={{ alignItems: "flex-end", marginBottom: 30 }}>
                    <Text style={{ color: "#6BB0F5", marginTop: 5 }}>Forget password?</Text>
                </View>
                <View style={styles.signupContainer}>
                    <Text>Already have an an account?</Text>
                    <TouchableOpacity onPress={()=>navigation.push("Login")}>
                        <Text style={styles.signupText}>Log In</Text>
                    </TouchableOpacity>
                </View>
                </>
                )}
            </Formik>
        </View>
    )
}

export default Signupform

const styles = StyleSheet.create({
    wrapper: {
        marginTop: 80
    },
    inputField: {
        borderRadius: 4,
        padding: 8,
        borderEndColor: "#FAFAFA",
        marginBottom: 10,
        borderWidth: 1
    },
    signupContainer: {
        justifyContent: "center",
        flexDirection: "row",
        marginBottom: 10
    },
    signupText: {
        color: "#6BB0F5",
        marginLeft: 5
    },
    textlogin:{
        color:"white",
        fontSize:20,
        fontWeight:"600",
        justifyContent:"center",
        textAlign:"center",
        paddingTop:5
    },
    button: isValid =>({
      backgroundColor: isValid ? "#0096F6" :"#9ACAF7",
      minHeight:40,
      borderRadius:4,
      alignItems:"center",
      justifyContent:"center"
    }),
})
