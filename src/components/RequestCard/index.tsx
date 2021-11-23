import React from 'react';
import { Text, View } from 'react-native';
import { RectButton, RectButtonProperties } from 'react-native-gesture-handler';

import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { ProductType } from '../../hooks/useProducts';
import { addHours, format, parseJSON } from 'date-fns';
import useRequests from '../../hooks/useRequests';

// interface RequestCardProps extends RectButtonProperties{
//   request: RequestProps
// }
// interface RequestProps{
//   id: string
//   author: string
//   deliveryPlace: {
//     complement: string
//     homeNumber: string
//     latitude: string
//     longitude: string
//     referencePoint: string
//     residenceType: string
//     street: string
//   }
//   paymenthMethod: {
//     method: string
//     paymenth: string
//   }
//   items: Array<ProductType>
//   total: string
//   deliveryDate: string
//   whenDone: string
// }
interface RequestCardProps{
  index: number
}

function RequestCard({index = 0}: RequestCardProps) {
  const navigation = useNavigation()
  const { request } = useRequests()

  const hours = `${format(parseJSON(request[index].deliveryDate), 'H')}:00 - ${format(addHours(parseJSON(request[index].deliveryDate), 1), 'H')}:00`
  const day = `${format(parseJSON(request[index].deliveryDate), 'dd')}/${format(parseJSON(request[index].deliveryDate), 'MM')}`

  return (
    <RectButton
      onPress={() =>
        navigation.navigate({
        name: 'RequestDetail',
        params: { index }
      })}
      style={styles.container}
    > 
      <View>
        <View style={styles.row}>
          <Text style={styles.title}>Festa Mariana {index}</Text>
          <Text style={styles.title}>{day}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.subtitle}>{hours}</Text>
        </View>
      </View>
      <View>
        <View style={styles.listItems}>
          {request[index].items.map((item) => (
             <RequestItem key={item.id} amount={item.amount }/>
          ))}
        </View>
      </View>
    </RectButton>
  );
};
type RequestItem = {
  amount: number | string
  imageUrl?: string
}
function RequestItem({amount, imageUrl}: RequestItem){
  return(
    <View style={styles.itemContainer}>
      <Text style={styles.itemTitle}>{amount}x</Text>
      <View style={styles.itemImage}>
      </View>
    </View>
  )
}

export default RequestCard;
