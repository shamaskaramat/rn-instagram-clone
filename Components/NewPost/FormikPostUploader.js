import {  Text, View, TextInput, Image, Button } from 'react-native'
import React, { useState } from 'react'
import * as Yup from "yup";
import { Formik } from 'formik';
import { Divider } from 'react-native-elements'
import validUrl from 'valid-url'
const Placeholderimg_URL = "https://samuelkleinberg.com/wp-content/uploads/2017/03/no-image.jpg"
const uploadPostSchema = Yup.object().shape({
    imageurl: Yup.string().url().required("A URL is required"),
    caption: Yup.string().max(2200, 'Caption has reached over 2200 characters')
});
const FormikPostUploader = ({navigation}) => {
    const [thumnailurl, setThumnailurl] = useState(Placeholderimg_URL)
    return (
        <Formik initialValues={{ caption: "", imageurl: "" }}
            onSubmit={(value) => {
            console.log(value)
            console.log("Your Post Submitted Successfully")
            navigation.goBack()
            }
            }
            validationSchema={uploadPostSchema}
            validateOnMount={true}
        >
            {({ handleBlur, handleChange, handleSubmit, values, errors, isValid }) => (
                <>
                    <View style={{ margin: 20, flexDirection: "row" }}>
                        <Image source={{ uri: validUrl.isUri(thumnailurl) ? thumnailurl: Placeholderimg_URL}} style={{ height: 100, width: 100 }} />
                        <View style={{ position: "absolute", top: 5, right: 70 }}>
                            <TextInput style={{ color: "white", fontSize: 20 }}
                                placeholder="Write a caption"
                                placeholderTextColor='gray'
                                multiline={true}
                                onChangeText={handleChange('caption')}
                                onBlur={handleBlur('caption')}
                                value={values.caption}
                            />
                        </View>
                    </View>
                    <Divider width={0.2} orientation='vertical' />
                    <TextInput style={{ color: "white", fontSize: 16, marginTop: 10 }}
                        onChange={e=>setThumnailurl(e.nativeEvent.text)}
                        placeholder="Enter Image URL"
                        placeholderTextColor='gray'
                        onChangeText={handleChange('imageurl')}
                        onBlur={handleBlur('imageurl')}
                        value={values.imageurl}
                    />
                    {errors.imageurl && (
                        <Text style={{ fontSize: 10, color: "red" }}>{errors.imageurl}</Text>
                    )}
                    <Button onPress={handleSubmit} title="share" enable={isValid} style={{marginTop:50}}/>
                </>
            )}

        </Formik>
    )
}

export default FormikPostUploader

