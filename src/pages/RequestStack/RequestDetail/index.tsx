import { useNavigation, useRoute } from '@react-navigation/core';
import { addHours, format, parseJSON } from 'date-fns';
import React, { useState } from 'react';

import { Text, View } from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import Button from '../../../components/Button';
import Header from '../../../components/Header';
import { ProductType } from '../../../hooks/useProducts';
import useRequests from '../../../hooks/useRequests';
import { theme } from '../../../theme';
import { styles } from './styles';
import ptBR from 'date-fns/locale/pt-BR';

interface RequestType{
  id: string
  author: string
  deliveryPlace: {
    complement: string
    homeNumber: string
    latitude: string
    longitude: string
    referencePoint: string
    residenceType: string
    street: string
  }
  paymenthMethod: {
    method: string
    paymenth: string
  }
  items: Array<ProductType>
  total: string
  deliveryDate: string
  whenDone: string
}
interface Params{
  index: number
}
function RequestDetail() {
  const { request, setRequest } = useRequests()
  const route = useRoute()
  const { 
    index
  } = route.params as Params
  const navigation = useNavigation();
  const [ showAlert, setShowAlert ] = useState(false)

  const completeDateDelivery = format(parseJSON(request[index].deliveryDate), 'P', { locale: ptBR })
  const completeDateRequested = format(parseJSON(request[index].whenDone), 'P', { locale: ptBR })
  const hours = `${format(parseJSON(request[index].deliveryDate), 'H')}:00 - ${format(addHours(parseJSON(request[index].deliveryDate), 1), 'H')}:00`
  const day = `${format(parseJSON(request[index].deliveryDate), 'dd')}/${format(parseJSON(request[index].deliveryDate), 'MM')}`

  function handleRemoveRequest(){
    const filtered = request.filter((item) =>  {
      return item.id != request[index].id
    })
    navigation.navigate('FollowRequests')
    setRequest(filtered)
  }

  return (<>
    <Header title="Detalhe do pedido" border/>
    <ScrollView contentContainerStyle={styles.wrapper}>
      <View>
        <View style={styles.container}>
          <Text style={styles.title}>Festa Mariana</Text>
          <View style={styles.row}>
            <Text style={styles.time}>{hours}</Text>
            <Text style={styles.date}>{day}</Text>
          </View>
        </View>
        <View style={styles.listItems}>
          {request[index].items.map(item => (
            <Bullet key={item.id} amount={item.amount}/>
          ))}
        </View>
      </View>
      <View style={styles.container}>
        <Text style={styles.dateInfo}>Entrega em: {completeDateDelivery}</Text>
        <Text style={styles.dateInfo}>Pedido feito em: {completeDateRequested}</Text>
        <Text style={styles.price}>Preço: {request[index].total}</Text>

        <Button>Confirmar Entrega</Button>
        <View style={{height: 20,}}/>
        <Button onPress={() => setShowAlert(true)} redFit>Excluir Pedido</Button>
      </View>
    </ScrollView>
    <AwesomeAlert
      show={showAlert}
      title="Deseja mesmo excluir o pedido?"
      contentContainerStyle={{padding: 25, borderRadius: 17, }}
      titleStyle={{
        fontSize: 20,
        color: theme.colors.text,
        fontFamily: theme.fonts.poppins,
        textAlign: 'center'
      }}
      closeOnTouchOutside={true}
      closeOnHardwareBackPress={true}
      showCancelButton={true}
      showConfirmButton={true}
      confirmText="Excluir"
      cancelText="Cancelar"
      confirmButtonColor={theme.colors.red}
      cancelButtonColor={theme.colors.gold}
      confirmButtonStyle={{paddingHorizontal: 15,paddingVertical: 15, borderRadius: 8}}
      cancelButtonStyle={{paddingHorizontal: 15,paddingVertical: 15, borderRadius: 8}}
      onConfirmPressed={handleRemoveRequest}
      onCancelPressed={() => setShowAlert(false)}
      cancelButtonTextStyle={{fontSize: 12.64, color: theme.colors.white, fontFamily: theme.fonts.roboto, textAlign: 'center'}}
      confirmButtonTextStyle={{fontSize: 12.64, color: theme.colors.white, fontFamily: theme.fonts.roboto, textAlign: 'center'}}
    />
    </>
  );
};
type RequestItem = {
  amount: number | string
  imageUrl?: string
}
function Bullet({amount}: RequestItem){
  return(
  <View style={styles.bulletWrapper}>
    <RectButton style={{justifyContent: "center", alignItems: "center", padding: 8}}>
      <Text style={styles.bulletTitle}>{amount}x</Text>
      <View style={styles.bulletImage}>
      </View>
    </RectButton>
  </View>
)}

export default RequestDetail;
