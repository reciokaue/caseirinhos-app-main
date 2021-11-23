import React from 'react';
import { Text, View, Image } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import { MaterialIcons } from '@expo/vector-icons';
import { styles } from './styles';
import UseOrder from '../../hooks/useOrder';
import { useNavigation } from '@react-navigation/native';

import { showMessage } from "react-native-flash-message";

interface ProductCardProps extends RectButtonProps{
  itemId: string
  title: string
  about: string
  price: string
  amount: number
  imageUrls: Array<String>
}

function ProductCard({itemId, title, about, price, amount, imageUrls, ...rest}: ProductCardProps) {
  const navigation = useNavigation()
  const { addItemToOrder } = UseOrder()
  
  function HandleAddItem(){
    addItemToOrder(itemId, title, about, price, amount, imageUrls)
    showMessage({message: `${amount}+ ${title} foi adicionado a sua cestinha`, type: 'success'})
  }

  function RightSide(){
    return(
      <View style={styles.addButtonContainer}> 
        <RectButton onPress={HandleAddItem} style={styles.addButton}>
          <MaterialIcons name="exposure-plus-1" size={32} color="#FFF" />
        </RectButton>
      </View>
    )
  }
  return (
    <Swipeable
      containerStyle={styles.swipeable}
      childrenContainerStyle={{flex: 1,overflow: 'visible'}}
      overshootRight={false}
      overshootLeft={false}
      renderRightActions={RightSide}
    >
    <RectButton
      onPress={() => navigation.navigate({
        name: 'ProductDetail',
        params: {
          itemId: itemId,
          title: title,
          about: about,
          price: price,
          amount: amount || 1,
          imageUrls: imageUrls,
        }
      })}
      {...rest}  style={styles.container}
    >
      <View style={styles.image}>
        <Image style={{width: '100%', height: '100%'}} source={{uri: imageUrls[0]}}/>
      </View>
      <View style={styles.info}>
        <View style={{flex: 1}}>
          <Text style={ styles.title}>{title}</Text>
          <Text style={ styles.subtitle}>{about}</Text>
        </View>
        <View>
          <Text style={[styles.title, {fontSize: 27}]}>R$</Text>
          <Text style={[styles.title, {fontSize: 16}]}>{price}</Text>
        </View>
      </View>
    </RectButton>
  </Swipeable>
  );
};

export default ProductCard;
