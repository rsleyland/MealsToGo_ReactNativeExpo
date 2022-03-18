import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/infrastructure/theme/index'
import { AuthenticationContextProvider } from './src/services/authentication/authentication.context';
import { Navigation } from './src/infrastructure/navigation/index';
import * as firebase from "firebase";

import { useFonts, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { Lato_400Regular,  } from '@expo-google-fonts/lato';


export default function App() {

  const [fontsLoaded] = useFonts({
    Oswald_400Regular,
    Lato_400Regular,
  });

  // Firebase configuration
  const firebaseConfig = {
    
  };

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}else {
  firebase.app();
}


  if (!fontsLoaded) {
    return null;
  }
  else {
    return (
      <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <StatusBar style='auto' />
      </>
    );
  }

  
}

