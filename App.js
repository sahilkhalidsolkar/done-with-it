import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TextInput, Text, Switch, Button, Image, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'

import Screen from './app/components/Screen';
import WelcomeScreen from './app/screens/WelcomeScreen'
import MessageScreen from './app/screens/MessageScreen'
import ViewImageScreen from './app/screens/ViewImageScreen'
import AppText from './app/components/AppText';
import colors from './app/config/colors';
import AppButton from './app/components/AppButton';
import Card from './app/components/Card'
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import Icon from './app/components/Icon'
import ListItem from './app/components/ListItem'
import AccountScreen from './app/screens/AccountScreen'
import ListingScreen from './app/screens/ListingScreen';
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';
import LoginScreen from './app/screens/LoginScreen';
import ListingEditScreen from './app/screens/ListingEditScreen';
import ImageInput from './app/components/ImageInput';
import ImageInputList from './app/components/ImageInputList';



export default function App() {
  const [images, setImages] = useState([])
  const removeImage = (deleteImageUri) => {
    console.log('to be deleted', deleteImageUri)
    setImages(images.filter(image => deleteImageUri !== image))
  }
  const addImage = (image) => {
    setImages([...images, image])

  }
  // console.log(images);
  return (
    <View >
      <Screen>
        <ListingDetailsScreen />
        {/* <ImageInputList
          images={images}
          removeImage={removeImage}
          addImage={addImage}
        /> */}
        {/* <Image
          source={{ uri: "file://data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252FDoneWithIt_Updated-3e7f37d1-758c-4a12-b435-1165dbb06565/ImagePicker/240d6f9c-868c-46bc-9426-4b5642f06bb9.jpeg" }}
        /> */}
      </Screen>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});


// import React, { useState, useEffect } from 'react';
// import { Button, Image, View, Platform } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';

// export default function ImagePickerExample() {
//   const [image, setImage] = useState(null);

//   const pickImage = async () => {
//     // No permissions request is necessary for launching the image library
//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.All,
//       quality: 0.5,
//     });

//     console.log(result);

//     if (!result.canceled) {
//       setImage(result.assets[0].uri);
//     }
//   };

//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button title="Pick an image from camera roll" onPress={pickImage} />
//       {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
//     </View>
//   );
// }