import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Pressable ,Alert } from 'react-native'
import React, { useState } from 'react'
import * as Yup from "yup";
import { Formik } from 'formik';
import Validator from 'email-validator';
import {firebase} from '../../Firebase';
import "firebase/auth";

const Loginform = ({navigation}) => {
    const LoginFormSchema = Yup.object().shape({
        email: Yup.string().email().required('An email is required'),
        password: Yup.string().required().min(8, 'Your password has to have at least characters ')
    })
    const onLogin = async (email, password)=>{
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password)
            console.log("firebase login successful 🔥", email , password)
        } catch (error) {
            Alert.alert(
                'You are no authenticated user ☠️',
                error.message + '\n\n whats next you wanna do 👀',
                [
                    {
                        text:"OK",
                        onPress: ()=>console.log('OK'),
                        style:'cancle'
                    },
                    {
                        text:"Sign up",
                        onPress: ()=>navigation.push("Signup")
                    }
                ]
            )
        }
    }
    return (
        <View style={styles.wrapper}>
            <Formik 
            initialValues={{email:'' , password:''}}
            onSubmit={values=>{onLogin(values.email, values.password)}}
            validationSchema={LoginFormSchema}
            validateOnMount={true}
            >
             {({ handleBlur, handleChange, handleSubmit, values, errors, isValid }) => (
                 <>
                <View style={[styles.inputField,{
                    borderColor:values.email.length<1 || Validator.validate(values.email) ? "#ccc" : "red"
                }]}>
                    <TextInput
                        placeholderTextColor='#444'
                        placeholder='Phone Number , Username or email'
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
                <Pressable style={styles.button(isValid)} onPress={handleSubmit}><Text style={styles.textlogin}>Log In</Text></Pressable>
                <View style={{ alignItems: "flex-end", marginBottom: 30 }}>
                    <Text style={{ color: "#6BB0F5", marginTop: 5 }}>Forget password?</Text>
                </View>
                <View style={styles.signupContainer}>
                    <Text>Don't have an an account?</Text>
                    <TouchableOpacity onPress={()=>navigation.push("Signup")}>
                        <Text style={styles.signupText}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
                </>
                )}
            </Formik>
        </View>
    )
}

export default Loginform

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