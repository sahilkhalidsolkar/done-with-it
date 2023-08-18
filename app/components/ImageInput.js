import { StyleSheet, Text, View, Image, TouchableWithoutFeedback, ScrollView, Alert } from 'react-native'
import React, { useState } from 'react'
import * as ImagePicker from 'expo-image-picker';
import { Entypo } from '@expo/vector-icons';
import colors from '../config/colors';
import { v4 } from 'uuid';

const ImageInput = ({ image, handleChange }) => {
    const handlePress = () => {
        if (!image) {
            pickImage()
        } else {
            deleteImage(image)
        }
    }
    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            quality: 0.5,
        });

        console.log(result);

        if (!result.canceled) {
            handleChange(result.assets[0].uri);
        }
    };

    const deleteImage = (image) => {

        Alert.alert(
            "remove",
            "Are you sure you want to remove",
            [
                {
                    text: "No",
                },
                {
                    text: "Yes",
                    onPress: () => handleChange(image)

                }
            ]
        );
    }

    return (

        <TouchableWithoutFeedback onPress={handlePress}>
            <View style={styles.imageButton} >
                {!image && <Entypo name="camera" size={30} color={colors.medium} />}
                {image &&
                    <Image
                        source={{ uri: image }}
                        style={styles.imageStyle}
                    />}
            </View>
        </TouchableWithoutFeedback>



    )
}

export default ImageInput

const styles = StyleSheet.create({
    imageButton: {
        width: 100,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        margin: 5,
        backgroundColor: colors.light,
        overflow: 'hidden'
    },
    imageStyle: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'


    }


})