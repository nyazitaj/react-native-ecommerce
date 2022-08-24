import {
    ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import { Colors } from '../components/Colors';

export const Passager = ({navigation}) => {
  const [listUtilisateur, setListUtilisateur] = useState([]);

  useEffect(() => {
    // Pour atteindre le PC hote (si emulateur) ip: 10.0.2.2
    // si le téléphone est en USB: partagé votre connexion de donnée,
    // et si l'ip sera celle de votre pc
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(json => json.json())
      .then(res => setListUtilisateur(res));
  }, []);
  
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={backgroundStyle}>
      {listUtilisateur.map(utilisateur => (
        <TouchableOpacity style={styles.btnDefault} key={utilisateur.id} onPress={() => {navigation.navigate('Details voyage', utilisateur)}}>
          <View>
            <Text>{utilisateur.id}:  {utilisateur.name}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  btnDefault: {
    marginTop: 10,
    marginBottom: 10,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 10,
    paddingRight: 10,
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '95%',
    textAlign: 'center',
    color: 'white',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});
