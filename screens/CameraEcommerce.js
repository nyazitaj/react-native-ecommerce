import {useRef, useState} from 'react';
import {Alert, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {useCameraDevices, Camera} from 'react-native-vision-camera';
import React from 'react';

export const CameraEcommerce = ({route, navigation}) => {
  const devices = useCameraDevices();
  const device = devices.back;

  const camera = useRef(null);

  const [currentPhoto, setCurrentPhoto] = useState('');
  const [torchLight, setTorchLight] = useState('off');

  const btnTakePhoto = async (camera, navigation, e) => {
    e.preventDefault();

    const photo = await camera.current.takePhoto({
      flash: torchLight,
    });

    if (photo) {
      setCurrentPhoto(photo);
    }
  };

  const btnToggleTorchLight = () => {
    if (torchLight == 'on') {
      setTorchLight('off');
      Alert.alert('Désactivé');
    } else {
      setTorchLight('on');
      Alert.alert('Activé');
    }
  };

  // CSS
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
    imagePreview: {
      width: '60%',
      height: '60%',
      borderWidth: 1,
      borderColor: '#cccccc',
      alignSelf: 'center',
      marginTop: 25,
    },
    imagePreviewText: {
      width: '80%',
      alignSelf: 'center',
      marginTop: 5,
      paddingTop: 5,
      paddingBottom: 3,
      textAlign: 'center'
    },
    btnTorch: {
      alignSelf: 'flex-end',
      width: 40,
      height: 40,
      borderRadius: 50,
      display: 'flex',
      alignContent: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 15,
      marginTop: 50,
      backgroundColor: 'white',
      transform: [{rotateZ: '-45deg'}],
    },
    on: {
      backgroundColor: 'yellow',
    },
  });

  return device == null ? (
    <Text>Chargement</Text>
  ) : (
    <>
      {currentPhoto == '' ? (
        <>
          <Camera
            ref={camera}
            photo={true}
            device={device}
            isActive={true}
            style={StyleSheet.absoluteFill}></Camera>

          <Pressable
            style={styles.btnTake}
            onPress={e => btnTakePhoto(camera, navigation, e)}></Pressable>

          <Pressable
            id="torch-light"
            style={
              torchLight == 'on'
                ? [styles.btnTorch, styles.on]
                : styles.btnTorch
            }
            onPress={btnToggleTorchLight}>
            <Text>🔦</Text>
          </Pressable>
        </>
      ) : (
        <>
          <Image
            source={{uri: 'file://' + currentPhoto.path}}
            style={styles.imagePreview}></Image>
            <Text style={styles.imagePreviewText}>Largeur : {currentPhoto.width}</Text>
            <Text style={styles.imagePreviewText}>Hauteur : {currentPhoto.height}</Text>
            <Text style={styles.imagePreviewText}>Fichier : {currentPhoto.path}</Text>
        </>
      )}
    </>
  );
};
