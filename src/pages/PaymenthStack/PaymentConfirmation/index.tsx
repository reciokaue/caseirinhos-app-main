import { format, parseJSON } from 'date-fns';
import React from 'react';

import { Text, View } from 'react-native';
import { showMessage } from 'react-native-flash-message';
import Button from '../../../components/Button';
import Header from '../../../components/Header';
import InfoCost from '../../../components/InfoCost';
import LinkCard from '../../../components/LinkCard';
import UseAuthFirebase from '../../../hooks/useAuth';
import UseOrder from '../../../hooks/useOrder';
import { database } from '../../../services/firebase';
import { styles } from './styles';
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { useNavigation } from '@react-navigation/core';
import useRequests from '../../../hooks/useRequests';

function PaymentConfirmation() {
  const navigation = useNavigation()
  const {
    subTotal,
    deliveryDate,
    paymentMethod,
    HandleClearOrder,
    deliveryLocation, 
    orderItens
  } = UseOrder()
  const { userId } = UseAuthFirebase()
  const { setRequest, request } = useRequests()

  async function doOrder() {
    if (userId && deliveryDate && deliveryLocation && paymentMethod && orderItens && subTotal > 0) {
      const order = {
        items: orderItens,
        paymentMethod: paymentMethod,
        whenDone: JSON.stringify(new Date),
        deliveryDate: deliveryDate,
        deliveryPlace: deliveryLocation,
        total: subTotal + 5,
        author: userId,
      }
      // await database.ref(`orders/`).push(order)
      setRequest([...request, order])
      console.log(order)
      showMessage({ message: 'Pedido efetuado com sucesso', floating: false, statusBarHeight: getStatusBarHeight(), position: 'top', type: 'success' })
      HandleClearOrder()
      navigation.navigate('Home')
    } else {
      showMessage({ message: 'Preencha todos os dados para conseguir efetuar o pedido', floating: false, statusBarHeight: getStatusBarHeight(), position: 'top' })
    }
  }

  return (<>
    <Header/>
    <View style={styles.container}>
      <Text style={styles.title}>Finalizar Pagamento</Text>
      <View>
        <LinkCard toLink="PaymentMethods" title="Metodo de pagamento" subtitle={paymentMethod? `${paymentMethod.method} - ${paymentMethod.payment}` : ''}/>
        <LinkCard toLink="DateScheduling" title="Data de entrega" subtitle={deliveryDate != '' ? `${format(parseJSON(deliveryDate), 'P')} - ${format(parseJSON(deliveryDate), 'kk')}:${format(parseJSON(deliveryDate), 'mm')}` : ''}/>
        <LinkCard toLink="MapLocation" title="Entregar em" subtitle={deliveryLocation ? `${deliveryLocation.street} - ${deliveryLocation.homeNumber}`: ''}/>
      </View>

      <View style={styles.subContainer}>
        <InfoCost subtotal={subTotal} />
        <View style={{paddingHorizontal: 32}}>
          <Button onPress={doOrder}>Confirmar Pedido</Button>
        </View>
      </View>
      <View style={styles.progress}/>
    </View>
  </>);
};

export default PaymentConfirmation;
