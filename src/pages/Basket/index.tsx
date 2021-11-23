import React, { useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import { format, parseJSON } from 'date-fns';

import { Animated, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import Button from '../../components/Button';
import InfoCost from '../../components/InfoCost';
import LinkCard from '../../components/LinkCard';
import SwipeableButton from '../../components/SwipeableButton';

import UseAuthFirebase from '../../hooks/useAuth';
import useOrder from '../../hooks/useOrder';

import { styles } from './styles';

function Basket() {
  const scrollY = useRef(new Animated.Value(0)).current;
  const diffClamp = Animated.diffClamp(scrollY, 0, 180)
  const translateY = diffClamp.interpolate({
    inputRange: [0, 180],
    outputRange: [0, - 180],
  })

  const { orderItens, subTotal, deliveryDate, paymentMethod, HandleClearOrder, deliveryLocation, } = useOrder()
  const { userId } = UseAuthFirebase()
  const navigation = useNavigation()

  const admin = userId == 'kaue.recio2@gmail.com'? true: false
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.header, {
        transform: [
          { translateY: translateY }
        ],
        elevation: 5,
        zIndex: 100,
      }]}>
        <View style={styles.row}>
          <Text style={styles.title}>Cestinha</Text>
          <View style={{ paddingBottom: 5 }}>
            <Text onPress={HandleClearOrder} style={styles.clear}>Limpar</Text>
          </View>
        </View>
        <LinkCard toLink="MapLocation" title="Entregar em" subtitle={deliveryLocation ? `${deliveryLocation.street} - ${deliveryLocation.homeNumber}`: ''}/>
      </Animated.View>
      <ScrollView
        onScroll={(e) => { scrollY.setValue(e.nativeEvent.contentOffset.y) }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1, paddingTop: 180 }
        }>
        <View style={styles.scrollContainer}>
          {orderItens.map((item) => (
            item.amount > 0 &&
            <SwipeableButton
              key={item.itemId}
              itemId={item.itemId}
              title={item.title}
              about={item.about}
              price={item.price}
              amount={item.amount}
              imageUrls={item.imageUrls}
            />
          ))
          }
        </View>
        <View style={{ marginTop: 32 }}>
          <View style={{ width: '100%', paddingHorizontal: 32, paddingVertical: 20, }}>
            <Button onPress={() => navigation.navigate('Home')} outlined>Adicionar mais Produtos</Button>
          </View>
        </View>
        {/* {!admin && <> */}
        <LinkCard toLink="PaymentMethods" title="Metodo de pagamento" subtitle={paymentMethod ? `${paymentMethod.method} - ${paymentMethod.payment}` : ''} />
        <LinkCard toLink="DateScheduling" title="Data de entrega" subtitle={deliveryDate != '' ? `${format(parseJSON(deliveryDate), 'P')} - ${format(parseJSON(deliveryDate), 'kk')}:${format(parseJSON(deliveryDate), 'mm')}` : ''} />
        <LinkCard toLink="MapLocation" title="Entregar em" subtitle={deliveryLocation ? `${deliveryLocation.street} - ${deliveryLocation.homeNumber}` : ''} />
        {/* </>} */}
        {admin && <LinkCard toLink="DateSetting" title="Criar nova data de entrega" subtitle="" />}
        
        <InfoCost subtotal={subTotal} />
        <View style={{ marginHorizontal: 32, paddingBottom: 32 }}>
          <Button onPress={() => navigation.navigate('PaymentConfirmation')}>Confirmar Pedido</Button>
        </View>
      </ScrollView>
      <View style={styles.progress}/>
    </View>
  );
};

export default Basket;
