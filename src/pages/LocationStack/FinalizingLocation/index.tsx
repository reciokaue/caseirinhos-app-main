import React, {useState} from 'react';

import { Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView, Text, View, Platform, } from 'react-native';
import Header from '../../../components/Header';

import { styles } from './styles';
import Input from '../../../components/Input';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import Button from '../../../components/Button'

import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { showMessage } from 'react-native-flash-message';
import { useNavigation, useRoute } from '@react-navigation/core';
import UseOrder from '../../../hooks/useOrder';

interface Params{
  latitude: number
  longitude: number
}

function FinalizingLocation() {
  const { setDeliveryLocation } = UseOrder()
  const route = useRoute()
  const { 
    latitude,
    longitude,
  } = route.params as Params
  const navigation = useNavigation()

  const [ streetName, setStreetName ] = useState('')
  const [ houseNumber, setHouseNumber ] = useState('')
  const [ complement, setComplement ] = useState('')
  const [ referencePoint, setReferencePoint ] = useState('')
  const [ requestTo, setRequestTo ] = useState('home')

  function handleFinalizeLocation(){
    if(streetName != '' && houseNumber != '' && latitude && longitude){
      const location = {
        street: streetName,
        homeNumber: houseNumber,
        complement: complement,
        referencePoint: referencePoint,
        residenceType: requestTo,
        longitude: longitude,
        latitude: latitude,
      }
      setDeliveryLocation(location)
      showMessage({message: 'Localização confirmada com sucesso', type: 'success'})
      navigation.navigate('Basket')
    }else{
      showMessage({message: 'Complete os dados de cadastro', type: 'danger'})
    }
  }

  return (
    <ScrollView style={styles.wrapper}>
      <Header/>
      <KeyboardAvoidingView
        style={styles.content}
        behavior={Platform.OS === 'ios' ? 'padding': 'height'}
      >
         <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
           <View style={styles.container}>
            <Text  style={styles.title}>Completando os Dados</Text>
            <View>
              <Input setText={setStreetName} stateText={streetName} placeholder="Nome da rua" required/>
              <View style={{flexDirection: 'row'}}>
                <View style={{width: '40%', marginRight: 16}}>
                  <Input keyboardType="numeric" setText={setHouseNumber} stateText={houseNumber} placeholder="Número" required/>
                </View>
                <View style={{width: '60%',  paddingRight: 16}}>
                  <Input setText={setComplement} stateText={complement} placeholder="Complemento"/>
                </View>
              </View>
              <Input setText={setReferencePoint} stateText={referencePoint} placeholder="Ponto de Referencia"/>
            </View>
            <Text  style={styles.subtitle}>Marcar como</Text>
            <View style={styles.switch}>
              <View  style={[styles.card, requestTo == 'home' && styles.borderEffect]}>
                <RectButton onPress={() => setRequestTo('home')} style={styles.cardInside}>
                  <Text style={styles.cardText}>Casa</Text>
                  <AntDesign name="home" size={24} color="#57575A" />
                </RectButton>
              </View>
              <View  style={[styles.card, requestTo == 'work' && styles.borderEffect]}>
                <RectButton onPress={() => setRequestTo('work')} style={styles.cardInside}>
                  <Text style={styles.cardText}>Trabalho</Text>
                  <MaterialCommunityIcons name="coffee-to-go-outline" size={24} color="#57575A" />
                </RectButton>
              </View>
            </View>
            <Button onPress={handleFinalizeLocation}>Completar Localização</Button>
           </View>
         </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};



export default FinalizingLocation;
