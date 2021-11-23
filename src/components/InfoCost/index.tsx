import React from 'react';

import { Text, View, } from 'react-native';
import { styles } from './styles';

interface InfoCostProps{
  subtotal: number
  freight?: number
}

function InfoCost({subtotal, freight = 5}: InfoCostProps) {
    return(
     <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.title}>Subtotal</Text>
        <Text style={styles.title}>R$ {subtotal}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.subtitle}>Taxa de entraga</Text>
        <Text style={styles.subtitle}>R$ {freight}</Text>
      </View>
      <View style={[styles.row, {marginBottom: 32}]}>
        <Text style={styles.title}>Total</Text>
        <Text style={styles.title}>R$ {subtotal + freight}</Text>
      </View>
     </View>
    )
};

export default InfoCost;
