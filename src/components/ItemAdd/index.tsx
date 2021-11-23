import React from 'react';

import { Text, View, } from 'react-native';
import { styles } from './styles';

import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import UseOrder from '../../hooks/useOrder';
import { useNavigation } from '@react-navigation/native';

interface ItemAddProps extends RectButtonProps{
  itemId: string
  imageUrl?: string
  title: string
  about: string
  price: string
}

function ItemAdd({itemId, imageUrl, title, about, price,...rest }: ItemAddProps) {
  const navigation = useNavigation();
  const { addItemToOrder } = UseOrder()

  return (
    <View style={[styles.container]}>
      <RectButton onPress={() => navigation.navigate({
        name: 'ProductDetail',
        params: {
          itemId: itemId,
          imageUrl: imageUrl,
          about: about,
          title: title,
          price: price,
        }
        })}
        style={{padding: 10}} {...rest}
      >
        <View style={styles.image}></View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>R${price}</Text>
      </RectButton>
      <RectButton onPress={() => addItemToOrder(itemId, title, price, 1)} style={styles.add}>
        <Feather name="plus" size={25} color="#fff" />
      </RectButton>
    </View>
  )
};

export default ItemAdd;
