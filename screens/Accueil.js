import React from 'react';
import { Colors } from '../components/Colors';
import { Header } from '../components/Header';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

export const Accueil = ({ navigation }) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const styles = StyleSheet.create({
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
    },
    highlight: {
      fontWeight: '700',
    },
    btnDefault: {
      marginTop: 10,
      marginBottom: 10,
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: 30,
      paddingRight: 30,
      marginLeft: 'auto',
      marginRight: 'auto',
      borderRadius: 10,
      width: '80%',
      textAlign: 'center',
      color: 'white',
    },
    btnValid: {
      backgroundColor: '#01548f',
      color: '#ffffff',
    },
    btnCancel: {
      backgroundColor: '#01548f',
      color: '#ffffff',
    },
  });

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={backgroundStyle}>
      <Header></Header>
      <View
        style={{
          backgroundColor: isDarkMode ? Colors.black : Colors.white,
        }}>

        <TouchableOpacity onPress={() => { navigation.navigate('Conducteur') }}>
          <Text style={[styles.btnDefault, styles.btnValid]}>Conducteur</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { navigation.navigate('Passager') }}>
          <Text style={[styles.btnDefault, styles.btnCancel]}>Passager</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};