import {useRef} from 'react';
import {
  Button,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import {useCameraDevices, Camera} from 'react-native-vision-camera';
import React, {useCallback, useEffect, useState} from 'react';

export const CameraEcommerce = () => {
  const devices = useCameraDevices();
  const device = devices.back;

  const camera = useRef(null);

  return (
    <>
      {device === null ? (
        <Text>Chargement</Text>
      ) : (
        <>
          <Camera
            ref={camera}
            photo={true}
            device={device}
            isActive={true}
            style={StyleSheet.absoluteFill}></Camera>
          {/* <Pressable style={styles.btnTakePhoto} onPress={btnTakePhoto}>
            <View style={styles.btnTakePhoto}></View>
          </Pressable> */}
        </>
      )}
    </>
  );
};

// const btnTakePhoto = async () => {
//   const photo = await camera.current.btnTakePhoto();
//   console.log(photo);
// };

const styles = StyleSheet.create({
  btnTakePhoto: {
    marginTop: 10,
    marginBottom: 10,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 10,
    paddingRight: 10,
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '50',
    height: '50',
    textAlign: 'center',
    color: 'white',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});
