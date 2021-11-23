import React from 'react';
import Routes from './src/routes';

import { useFonts, Jost_500Medium } from '@expo-google-fonts/jost';
import { Poppins_700Bold } from '@expo-google-fonts/poppins';
import { DMSans_700Bold, DMSans_400Regular } from '@expo-google-fonts/dm-sans';
import { Roboto_500Medium } from '@expo-google-fonts/roboto';

import AppLoading from 'expo-app-loading';
import FlashMessage from 'react-native-flash-message';

import { OrderProvider } from './src/contexts/OrderContext';
import { StatusBar } from 'expo-status-bar';
import { AuthFirebaseProvider } from './src/contexts/authFirebaseContext';

import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RequestProvider } from './src/contexts/RequestContext';

export default function App() {
  let [fontsLoaded] = useFonts({
    Jost_500Medium, Poppins_700Bold, DMSans_700Bold, DMSans_400Regular, Roboto_500Medium
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <OrderProvider>
        <AuthFirebaseProvider>
          <RequestProvider>
            <StatusBar  backgroundColor="#1212127f" style='light'  translucent/>
            <Routes/>
            <FlashMessage position="top" statusBarHeight={getStatusBarHeight()} style={{borderBottomRightRadius: 10, borderBottomLeftRadius: 10}}/>
          </RequestProvider>
        </AuthFirebaseProvider>
      </OrderProvider>
    );
  }
}