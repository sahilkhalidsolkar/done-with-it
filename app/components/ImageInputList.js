import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ImageInput from './ImageInput'

const ImageInputList = ({ images, removeImage, addImage }) => {
    console.log(images)
    return (
        <View style={styles.imageList}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                {images.map(image => <ImageInput
                    key={image}
                    image={image}
                    handleChange={removeImage}
                />)}
                <ImageInput handleChange={addImage} />
            </ScrollView >
        </View >
    )
}

export default ImageInputList

const styles = StyleSheet.create({
    imageList: {
        flexDirection: 'row',
    }
})