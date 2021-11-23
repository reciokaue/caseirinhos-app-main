import React, { useRef, useState } from 'react';

import { View, Text,  useWindowDimensions } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { Modalize } from 'react-native-modalize';

import { styles } from './styles';
import Button from '../../../components/Button';
import { useNavigation } from '@react-navigation/core';
import { showMessage } from 'react-native-flash-message';
import UseOrder from '../../../hooks/useOrder';

interface CardPaymentProps {
  payment: string
  method: string
}
function PaymentMethods() {
  const { setPaymentMethod } = UseOrder()

  const InApp = () => (
    <ScrollView contentContainerStyle={styles.side}>
      <Text style={styles.subtitle}>Crédito</Text>
      <CardPayment method='Crédito' payment='Visa'/>
      <CardPayment method='Crédito' payment='Mastercard'/>
      <Text style={styles.subtitle}>Débito</Text>
      <CardPayment method='Débito' payment='Visa'/>
      <CardPayment method='Débito' payment='Mastercard'/>
    </ScrollView>
  );
  const InDelivery = () => (
    <ScrollView contentContainerStyle={styles.side}>
    <Text style={styles.subtitle}>Crédito</Text>
    <CardPayment method='Crédito' payment='Visa'/>
    <CardPayment method='Crédito' payment='Mastercard'/>
    <Text style={styles.subtitle}>Débito</Text>
    <CardPayment method='Débito' payment='Visa'/>
    <CardPayment method='Débito' payment='Mastercard'/>
    <Text style={styles.subtitle}>Dinheiro</Text>
    <CardPayment method='Pague na Hora' payment='Dinheiro'/>
  </ScrollView>
  );
  const renderScene = SceneMap({
    first: InApp,
    second: InDelivery,
  });
    const renderTabBar = props => (
      <TabBar {...props}
        indicatorStyle={styles.indicator}
        style={styles.tabBar}
        activeColor='#E83F5B'
        inactiveColor='#E1E3E6'
        labelStyle={styles.label}
        pressOpacity={0.1}
      />
    );
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Pague pelo app' },
    { key: 'second', title: 'Pague na entrega' },
  ]);
  
  const navigation = useNavigation()
  const modalizeRef = useRef<Modalize>(null);
  
  function onOpen(payment: string, method: string){
    setPayment(payment)
    setMethod(method)
    modalizeRef.current?.open();
  };
  function ConfirmPaymentMethod(){
    setPaymentMethod({payment: payment, method: method})
    navigation.navigate('Basket')
    showMessage({message: 'Seu metodo de pagamento foi confirmado', type: 'success'})
  }

  const [ payment, setPayment ] = useState('')  
  const [ method, setMethod ] = useState('')  

  return (
    <ScrollView
      contentContainerStyle={{flexGrow: 1, backgroundColor: '#fff'}}
    >
      <View style={styles.header}>
        <Text style={styles.title}>Escolha a Forma de pagamento</Text>
      </View>      
      <TabView
        renderTabBar={renderTabBar}
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
      />
      <Modalize
        modalStyle={{marginTop: layout.height - 196}}
        handleStyle={{ width: 105}}
        childrenStyle={{ borderTopLeftRadius: 50, borderTopRightRadius: 50, overflow: 'hidden', padding: 32}}
        overlayStyle={{backgroundColor: 'rgba(0, 0, 0, 0.45)'}}
        ref={modalizeRef}>
        <View style={{flexDirection: 'row', marginBottom: 32}}>
          <View style={styles.modalCardFlag}/>
          <View>
            <Text style={styles.modalTitle}>{payment}</Text>
            <Text style={styles.modalSubtitle}>{method}</Text>
          </View>
        </View>
        <Button onPress={ConfirmPaymentMethod}>Confirmar</Button>
      </Modalize>
    </ScrollView>
  );

  function CardPayment({payment, method}: CardPaymentProps) {
    return (
      <RectButton onPress={() => onOpen(payment, method)} style={styles.cardContainer}>
        <View style={styles.cardImage}/>
        <Text style={styles.cardText}>{payment}</Text>
      </RectButton>
    );
  };
};


export default PaymentMethods;
