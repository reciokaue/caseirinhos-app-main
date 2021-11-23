import React from 'react';
import { Image, Text, View } from 'react-native';
import { RectButton, RectButtonProperties, RectButtonProps } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { styles } from './styles';
import UseOrder from '../../hooks/useOrder';
import { useNavigation } from '@react-navigation/native';
import { showMessage } from 'react-native-flash-message';

interface SwipeableProps extends RectButtonProperties{
  itemId: string
  title: string
  about: string
  price: string
  amount: number
  imageUrls: Array<String>
}

function SwipeableButton({itemId, title, about, price, amount, imageUrls, ...rest}: SwipeableProps) {
  const navigation = useNavigation()
  
  const { addItemToOrder, removeItemToOrder } = UseOrder()

  function HandleAddItem(){
    addItemToOrder(itemId, title, about, price, 1, imageUrls)
    showMessage({message: `1+ ${title} foi adicionado a sua cestinha`, type: 'success'})
  }
  function HandleRemoveItem(){
    removeItemToOrder(itemId, price)
    showMessage({message: `1- ${title} foi removido`, type: 'danger', })
  }
  
  function LeftSide(){
    return(
      <View style={styles.removeButtonContainer}> 
        <RectButton onPress={HandleRemoveItem} style={styles.removeButton}>
          <Feather name="trash" size={32} color="#FFF"/>
        </RectButton>
      </View>
    )
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
      renderLeftActions={LeftSide}
    >
    <RectButton
      onPress={() => navigation.navigate({
        name: 'ProductDetail',
        params: {
          itemId: itemId,
          title: title,
          about: about,
          price: price,
          amount: 1,
          imageUrls: imageUrls,
        }
      })}
      {...rest}  style={styles.container}
    >
      <View style={styles.image}>
        {amount > 0 && <Text style={styles.amount}>{amount}x</Text>}
        <Image style={{width: '100%', height: '100%', position: 'absolute'}} source={{uri: imageUrls[0]}}/>
      </View>
      <View style={styles.info}>
        <Text style={ styles.title}>{title}</Text>
        <View>
          <Text style={[styles.title, {fontSize: 27}]}>R$</Text>
          <Text style={[styles.title, {fontSize: 16}]}>{price}</Text>
        </View>
      </View>
    </RectButton>
  </Swipeable>
  );
};

export default SwipeableButton;
