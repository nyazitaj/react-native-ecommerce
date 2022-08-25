import { useRef, useState } from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useCameraDevices, Camera } from 'react-native-vision-camera';
import React from 'react';

export const CameraEcommerce = ({ route, navigation }) => {
  const devices = useCameraDevices();
  const device = devices.back;

  const camera = useRef(null);

  const [currentPhoto, setCurrentPhoto] = useState('')

  const btnTakePhoto = async (camera, navigation) => {
    const photo = await camera.current.takePhoto();

    if (photo) {
      setCurrentPhoto(photo)
    }
  };

  console.log(currentPhoto)

  const styles = StyleSheet.create({
    btnTake: {
      marginTop: 10,
      marginBottom: 10,
      paddingTop: 20,
      paddingBottom: 20,
      paddingLeft: 10,
      paddingRight: 10,
      borderWidth: 5,
      borderColor: '#cccccc',
      borderRadius: 50,
      width: 50,
      height: 50,
      textAlign: 'center',
      color: 'white',
      position: 'absolute',
      bottom: 0,
      alignSelf: 'center',
    },
  });

  return (
    device == null ? (
      <Text>Chargement</Text>
    ) : (
      <>
        {
          currentPhoto == '' ?
            <>
              <Camera
                ref={camera}
                photo={true}
                device={device}
                isActive={true}
                style={StyleSheet.absoluteFill}>
              </Camera>
              <Pressable style={styles.btnTake} onPress={() => btnTakePhoto(camera, navigation)}></Pressable>
            </>
            :
            <Text>{JSON.stringify(currentPhoto)}</Text>
        }
      </>
    )
  );
};
