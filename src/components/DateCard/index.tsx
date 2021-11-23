import React from 'react';

import { Entypo } from '@expo/vector-icons';
import { Text, View, } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { styles } from './styles';

interface DateCardProps extends RectButtonProps{
  title: string
  day: number | string
  selected?: boolean
}

function DateCard({title, day, selected, ...rest}: DateCardProps) {
  return(
    <View  style={[styles.wrapper, selected&& styles.selected]}>
      <RectButton {...rest} style={styles.container}>
        <Text style={styles.title}>{day}</Text>
        {title !== '' && <Text style={styles.subtitle}>{title}</Text>}
      </RectButton>
    </View>
  )
};

export default DateCard;
