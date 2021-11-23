import React from 'react';

import { Entypo } from '@expo/vector-icons';
import { Text, View, } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { styles } from './styles';

interface DateListItemProps extends RectButtonProps{
  hour: string
  selected?: boolean
}

function DateListItem({hour, selected, ...rest}: DateListItemProps) {
  return(
    <RectButton {...rest} style={styles.container}>
      <Text style={styles.hour}>{hour}</Text>
      <View style={[styles.radio, selected&& styles.selected]}/>
    </RectButton>
  )
};

export default DateListItem;
