import {
  Alert,
  Button,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {Colors} from '../components/Colors';
/* import DocumentPicker, {
  DirectoryPickerResponse,
  DocumentPickerResponse,
  isInProgress,
  types,
} from 'react-native-document-picker'; */
import {Camera} from 'react-native-vision-camera';

export const DetailsVoyage = ({route, navigation}) => {
  const utilisateur = route.params;

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [fileResponse, setFileResponse] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  /* const handleDocumentSelection = useCallback(async () => {
    try {
      const response = await DocumentPicker.pick({
        presentationStyle: 'fullScreen',
      });
      setFileResponse(response);
    } catch (err) {
      console.warn(err);
    }
  }, []); */

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={backgroundStyle}>
      <View style={styles.detailContainer}>
        <Text style={styles.detailRow}>
          <Text style={styles.detailTextLabel}>Nom : </Text>
          {utilisateur.name}
        </Text>
        <Text style={styles.detailRow}>
          <Text style={styles.detailTextLabel}>Email : </Text>
          {utilisateur.email}
        </Text>
        <Text style={styles.detailRow}>
          <Text style={styles.detailTextLabel}>Téléphone : </Text>
          {utilisateur.phone}
        </Text>
        <Text style={styles.detailRow}>
          <Text style={styles.detailTextLabel}>Siteweb : </Text>
          {utilisateur.website}
        </Text>
        <Text style={styles.detailRow}>
          <Text style={styles.detailTextLabel}>Adresse : </Text>
          {utilisateur.address.street}, {utilisateur.address.zipcode}{' '}
          {utilisateur.address.city}
        </Text>
        <Text style={styles.detailRow}>
          <Text style={styles.detailTextLabel}>Société : </Text>
          {utilisateur.company.name}
        </Text>
      </View>

      <View>
        {fileResponse.map((file, index) => (
          <Text
            key={index.toString()}
            style={styles.uri}
            numberOfLines={1}
            ellipsizeMode={'middle'}>
            {file?.uri}
          </Text>
        ))}

        {/* <Button title="Select 📑" onPress={handleDocumentSelection} /> */}
      </View>

      <Modal visible={modalVisible} transparent={false} animation="slide">
        <Text>
          Pour utiliser cette fonctionnalité, vous devez accepter les
          autorisations.
        </Text>

        <TouchableOpacity style={styles.btnDefault} onPress={btnChangeAuhorisation}>
          <Text>Changer les autorisations</Text>
        </TouchableOpacity>
      </Modal>

      <TouchableOpacity style={styles.btnDefault} onPress={() => {btnTakePhoto(navigation)}}>
        <Text>Prendre une photo</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const btnTakePhoto = async (navigation) => {
  let permission = await Camera.getCameraPermissionStatus()

  if (permission === 'authorized') {
    navigation.navigate('Camera')
  } else {
    let newCameraPermission = await Camera.requestCameraPermission()

    if (newCameraPermission === 'denied') {
      setModalVisible(true)
    }
  }
};

const btnChangeAuhorisation = async () => {
  await Linking.openSettings()
};

const styles = StyleSheet.create({
  detailContainer: {
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 20,
    paddingLeft: 10,
    paddingRight: 10,
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '95%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  detailRow: {
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    width: '95%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  detailTextLabel: {
    fontWeight: '900',
  },
});
