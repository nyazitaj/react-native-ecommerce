import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Colors} from '../components/Colors';

export const DetailsVoyage = ({route, navigation}) => {
  const utilisateur = route.params;

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  console.log(utilisateur.name);

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={backgroundStyle}>
        <View style={styles.detailContainer}>
          <Text style={styles.detailRow}><Text style={{fontWeight: "bold"}}>Nom : </Text>{utilisateur.name}</Text>
          <Text style={styles.detailRow}><Text style={{fontWeight: "bold"}}>Email : </Text>{utilisateur.email}</Text>
          <Text style={styles.detailRow}><Text style={{fontWeight: "bold"}}>Téléphone : </Text>{utilisateur.phone}</Text>
          <Text style={styles.detailRow}><Text style={{fontWeight: "bold"}}>Siteweb : </Text>{utilisateur.website}</Text>
          <Text style={styles.detailRow}><Text style={{fontWeight: "bold"}}>Adresse : </Text>{utilisateur.address.street}, {utilisateur.address.zipcode} {utilisateur.address.city}</Text>
          <Text style={styles.detailRow}><Text style={{fontWeight: "bold"}}>Société : </Text>{utilisateur.company.name}</Text>
        </View>
    </ScrollView>
  );
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
});
