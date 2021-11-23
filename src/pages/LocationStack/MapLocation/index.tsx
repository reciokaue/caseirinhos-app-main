import React, { useState } from 'react';
import * as Location from 'expo-location';

import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import MapView, { Marker } from 'react-native-maps';

import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { theme } from '../../../theme';
import { useNavigation } from '@react-navigation/core';

type Region = {
  latitude: number
  longitude: number
  latitudeDelta: number
  longitudeDelta: number
}

function MapLocation() {
  const [ location, setLocation ] = useState<Region>()
  const [ markerLocation, setMarkerLocation]  = useState()
  const [ messsage, setMessage ] = useState('');

  const navigation = useNavigation()

  async function AskLocation(){
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setMessage('Permissão para acessar a localição negada');
      return;
    }
  }
  async function GetLocation(){
    console.log('pedindo permissao')
    await AskLocation()
    console.log('permissao sucedida')

    let locationObject = await Location.getCurrentPositionAsync({});
    let { latitude, longitude } = locationObject.coords

    console.log('localização adquirida')

    setLocation({
      latitude: latitude,
      longitude: longitude,
      latitudeDelta: 0.004,
      longitudeDelta: 0.004,
    });
    setMarkerLocation({
      latitude: latitude,
      longitude: longitude,
    })
    setMessage(`${latitude}, ${longitude}`)
  }

  return (
    <ScrollView contentContainerStyle={ styles.container }>
      <Text style={styles.title}>Achar sua localização</Text>
        <MapView
          style={styles.map}
          initialRegion={location}
        >
          {
            markerLocation != undefined && 
            <Marker 
              coordinate={markerLocation}
              draggable
              style={{width: 50, height: 50}}
              onDragEnd={(e) => setMarkerLocation(e.nativeEvent.coordinate)}
            > 
              <View style={styles.marker}/>
            </Marker>
          }
      </MapView>
      {!location? (
        <RectButton style={styles.locationButton} onPress={GetLocation}>
          <Text style={styles.buttonText}>localizar</Text>
        </RectButton>
      ):(
        <RectButton style={styles.locationButton} onPress={
          () => navigation.navigate({
            name: 'FinalizingLocation',
            params: {
              latitude: location.latitude,
              longitude: location.latitude
            }
          })
        }>
          <Text style={styles.buttonText}>confirmar</Text>
        </RectButton>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: theme.colors.white,
    position: 'relative',
  },
  title: {
    fontFamily: theme.fonts.poppins,
    fontSize: 32,
    color: theme.colors.text,
    paddingTop: getStatusBarHeight() + 16,
    paddingHorizontal: 32,
  },
  locationButton:{
    position: 'absolute',
    bottom: 32,
    right: 32,
    backgroundColor: theme.colors.red,
    paddingVertical: 15,
    paddingHorizontal: 32,
    borderRadius: 8,
    elevation: 50,
  },
  buttonText: {
    fontFamily: theme.fonts.roboto,
    fontSize: 16,
    color: theme.colors.white,
  },
  map: {
    flex: 1,
    width: '100%',
    height: (Dimensions.get('window').height - 250),
  },
  marker: {
    width: 30,
    height: 30,
    backgroundColor: theme.colors.red,
    borderTopLeftRadius: 100, 
    borderTopRightRadius: 100, 
    borderBottomLeftRadius: 100,
    transform:  [{ rotate: '45deg' }],
    elevation: 30,
  }
});

export default MapLocation;
