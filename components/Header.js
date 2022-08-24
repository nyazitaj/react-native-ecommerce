 import {ImageBackground, StyleSheet, Text, useColorScheme} from 'react-native';
 import React from 'react';
 import {Colors} from './Colors';
 
 export const Header = () => {
   const isDarkMode = useColorScheme() === 'dark';
   return (
     <ImageBackground
       accessibilityRole="image"
       testID="new-app-screen-header"
       source={require('../assets/images/logo.png')}
       style={[
         styles.background,
         {
           backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
         },
       ]}
       imageStyle={styles.logo}>
       <Text
         style={[
           styles.text,
           {
             color: isDarkMode ? Colors.white : Colors.black,
           },
         ]}>
         Demo commerce
       </Text>
     </ImageBackground>
   );
 };
 
 const styles = StyleSheet.create({
   background: {
     paddingBottom: 40,
     paddingTop: 96,
     paddingHorizontal: 32,
   },
   logo: {
     opacity: 0.2,
     overflow: 'visible',
     resizeMode: 'cover',
     marginLeft: -128,
     marginBottom: -192,
   },
   text: {
     fontSize: 40,
     fontWeight: '700',
     textAlign: 'center',
   },
 });
 
 