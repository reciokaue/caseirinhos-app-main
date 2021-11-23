import React from 'react';

import { StyleSheet, Image, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons'; 
import { theme } from '../../theme';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

interface ImageCardButtonProps {
  uri: string
}

export function ImageCardButton({ uri }: ImageCardButtonProps) {
  return (
    <View style={ styles.container }>
      <Image style={ styles.image} source={{uri: uri}}/>
    </View>
  );
}
export function ImageAddButton(rest: RectButtonProps) {
  return (
    <RectButton {...rest} style={ styles.containerAdd }>
      <Foundation name="plus" size={24} color="white" />
    </RectButton>
  );
}
const styles = StyleSheet.create({
  container: {
    width: 67,
    height: 67,
    borderColor: theme.colors.line,
    borderWidth: 1.5,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0000',
    marginBottom: 13.5,
    marginRight: 13.5,
    overflow: 'hidden',
  },
  containerAdd: {
    width: 67,
    height: 67,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.red,
    marginBottom: 13.5,
    marginRight: 13.5,
    alignSelf: 'flex-start',
  },
  image:{
    width: '100%',
    height:'100%',
  }
});