/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {
  StatusBar,
  useColorScheme,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Colors } from './components/Colors';
import { Accueil } from './screens/Accueil';
import { Camera, CameraEcommerce } from './screens/CameraEcommerce';
import { Conducteur } from './screens/Conducteur';
import { DetailsVoyage } from './screens/DetailsVoyage';
import { Passager } from './screens/Passagers';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const Stack = createNativeStackNavigator()

  return (
    <SafeAreaProvider style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Accueil' component={Accueil}></Stack.Screen>
          <Stack.Screen name='Passager' component={Passager}></Stack.Screen>
          <Stack.Screen name='Conducteur' component={Conducteur}></Stack.Screen>
          <Stack.Screen name='Details voyage' component={DetailsVoyage}></Stack.Screen>
          <Stack.Screen name='Camera' component={CameraEcommerce}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>

    </SafeAreaProvider>
  );
};

export default App;