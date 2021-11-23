import React, { useState } from 'react';

import { Image, Text, View } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { SliderBox } from "react-native-image-slider-box";
import { useNavigation } from '@react-navigation/native';

import { AntDesign } from '@expo/vector-icons'; 

import { useRoute } from '@react-navigation/native';
import { showMessage } from 'react-native-flash-message';
import UseOrder from '../../../hooks/useOrder';
import { styles } from './styles';

interface Params{
  itemId: string
  title: string
  about: string
  price: string
  amount: number
  imageUrls: Array<String>
}

function ProductDetail() {
  const route = useRoute()
  const { 
    itemId,
    imageUrls,
    about,
    title,
    price,
  } = route.params as Params

  const [ amount, setAmount ] = useState(1)
  const { addItemToOrder } = UseOrder()
  const navigation = useNavigation()

  function HandleAddItem(){
    addItemToOrder(itemId, title, about, price, amount, imageUrls)
    showMessage({
      message: `${amount}+ ${title} foi adicionado a sua cestinha`,
      type: 'success',
      onPress: () => navigation.navigate('Basket'),
      
    })
  }


  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.imageBackground}>
        <SliderBox images={imageUrls} circleLoop={true} style={{width: "100%", height: '100%',}} />
        <View style={styles.header}>
          <RectButton style={styles.headerButton}>
            <AntDesign name="arrowleft" size={24} color="black" />
          </RectButton>
        </View>
        <View style={styles.scrollLinks}>
          <View style={styles.ellipsi}/>
          <View style={styles.ellipsi}/>
          <View style={styles.ellipsi}/>
        </View>
      </View>
      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.about}>{about}</Text>
        <Text style={styles.price}>R${price}</Text>
      </View>
      <View style={styles.buttons}>
        <View style={styles.buttonAddSub}>
          <RectButton onPress={() => setAmount(amount > 1 ? amount - 1: 1)} style={styles.action}><Text  style={styles.minus}> - </Text></RectButton>
            <Text style={styles.amount}>{amount}</Text>
          <RectButton onPress={() => setAmount(amount + 1)} style={styles.action}><Text  style={styles.plus}> + </Text></RectButton>
        </View>
        <RectButton onPress={HandleAddItem} style={styles.redFit}>
          <Text style={styles.titleRed}>Adicionar</Text>
          <Text style={styles.titleRed}>R${Number(price)*amount}</Text>
        </RectButton>
      </View>
    </ScrollView>
  );
};

export default ProductDetail;
